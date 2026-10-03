/*
 * Publish to Google Play from the command line, through the Play Developer API.
 *
 * Usage:
 *   node scripts/play-release.js check
 *   node scripts/play-release.js release --track internal|alpha|beta|production
 *        [--aab path] [--notes store/release-notes.json] [--name "1.7.0 (44)"]
 *        [--rollout 0.2] [--draft]
 *   node scripts/play-release.js listing        # title + descriptions from store/ASO.md
 *   node scripts/play-release.js images         # screenshots, feature graphic, icon from store/out
 *
 * Credentials: a Google service account key (JSON). Point PLAY_SERVICE_ACCOUNT_FILE
 * at it, or drop it in the repo root as my-project-*.json (gitignored). The
 * account must be invited in Play Console > Users and permissions with release
 * access to this app. Nothing is written to Play until the final "commit" call,
 * so a failure halfway leaves the store untouched.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const PACKAGE = 'id.imtaqin.cfmobile';
const API = `https://androidpublisher.googleapis.com/androidpublisher/v3/applications/${PACKAGE}`;
const UPLOAD = `https://androidpublisher.googleapis.com/upload/androidpublisher/v3/applications/${PACKAGE}`;
const DEFAULT_AAB = path.join(ROOT, 'android/app/build/outputs/bundle/release/app-release.aab');
// Play language code -> folder under store/out and heading in store/ASO.md
const LANGS = { 'en-US': 'en', id: 'id' };

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  if (i === -1) return fallback;
  const next = process.argv[i + 1];
  return next && !next.startsWith('--') ? next : true;
}

function keyFile() {
  if (process.env.PLAY_SERVICE_ACCOUNT_FILE) return process.env.PLAY_SERVICE_ACCOUNT_FILE;
  const found = fs.readdirSync(ROOT).find((f) => /^my-project-.*\.json$/.test(f));
  if (!found) throw new Error('No service account key. Set PLAY_SERVICE_ACCOUNT_FILE.');
  return path.join(ROOT, found);
}

async function accessToken() {
  const sa = JSON.parse(fs.readFileSync(keyFile(), 'utf8'));
  const now = Math.floor(Date.now() / 1000);
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/androidpublisher',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })}`;
  const signature = crypto.createSign('RSA-SHA256').update(unsigned).sign(sa.private_key).toString('base64url');
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsigned}.${signature}`,
    }),
  });
  const json = await res.json();
  if (!json.access_token) throw new Error(`Google sign-in failed: ${json.error_description ?? json.error ?? res.status}`);
  return { token: json.access_token, email: sa.client_email };
}

async function call(token, method, url, body, contentType) {
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body ? { 'Content-Type': contentType ?? 'application/json' } : {}),
    },
    body: body && !contentType ? JSON.stringify(body) : body,
  });
  const text = await res.text();
  let json = null;
  try { json = text ? JSON.parse(text) : {}; } catch { /* non-JSON error page */ }
  if (!res.ok) {
    const message = json?.error?.message ?? text.slice(0, 300);
    const err = new Error(`${method} ${url.replace(API, '').replace(UPLOAD, '(upload)')} -> ${res.status}: ${message}`);
    err.status = res.status;
    throw err;
  }
  return json;
}

/** Run `work` inside a Play "edit" and commit it, or throw it away on failure / when `commit` is false. */
async function withEdit(token, commit, work) {
  const edit = await call(token, 'POST', `${API}/edits`, {});
  try {
    const result = await work(edit.id);
    if (commit) await call(token, 'POST', `${API}/edits/${edit.id}:commit`);
    else await call(token, 'DELETE', `${API}/edits/${edit.id}`);
    return result;
  } catch (e) {
    await call(token, 'DELETE', `${API}/edits/${edit.id}`).catch(() => {});
    throw e;
  }
}

function asoBlocks() {
  const text = fs.readFileSync(path.join(ROOT, 'store/ASO.md'), 'utf8').replace(/\r\n/g, '\n');
  const sections = { en: text.split('## Indonesian')[0], id: text.split('## Indonesian')[1] ?? '' };
  const block = (section, heading) => {
    const m = section.match(new RegExp(`### ${heading}\\s+\`\`\`\\n([\\s\\S]*?)\\n\`\`\``));
    if (!m) throw new Error(`store/ASO.md: missing "${heading}"`);
    return m[1].trim();
  };
  const out = {};
  for (const [play, folder] of Object.entries(LANGS)) {
    out[play] = {
      title: block(sections[folder], 'Title'),
      shortDescription: block(sections[folder], 'Short description'),
      fullDescription: block(sections[folder], 'Full description'),
    };
  }
  return out;
}

async function check() {
  const { token, email } = await accessToken();
  console.log(`Signed in as ${email}`);
  await withEdit(token, false, async (id) => {
    const tracks = await call(token, 'GET', `${API}/edits/${id}/tracks`);
    for (const t of tracks.tracks ?? []) {
      const releases = (t.releases ?? [])
        .map((r) => `${r.name ?? '?'} [${(r.versionCodes ?? []).join(',')}] ${r.status}`)
        .join('; ');
      console.log(`  ${t.track}: ${releases || 'empty'}`);
    }
    const listings = await call(token, 'GET', `${API}/edits/${id}/listings`);
    console.log(`  listings: ${(listings.listings ?? []).map((l) => l.language).join(', ')}`);
  });
  console.log('Access OK. Nothing was changed.');
}

async function release() {
  const track = arg('track');
  if (!['internal', 'alpha', 'beta', 'production'].includes(track)) throw new Error('--track internal|alpha|beta|production');
  const aab = path.resolve(arg('aab', DEFAULT_AAB));
  const notesFile = arg('notes', path.join(ROOT, 'store/release-notes.json'));
  const notes = fs.existsSync(notesFile) ? JSON.parse(fs.readFileSync(notesFile, 'utf8')) : {};
  for (const [language, text] of Object.entries(notes)) {
    if ([...text].length > 500) throw new Error(`Release notes for ${language} are over 500 characters`);
  }
  const rollout = arg('rollout') ? parseFloat(arg('rollout')) : null;
  const draft = !!arg('draft');
  const { token } = await accessToken();

  const versionCode = await withEdit(token, true, async (id) => {
    console.log(`Uploading ${path.basename(aab)} (${(fs.statSync(aab).size / 1e6).toFixed(1)} MB)...`);
    const bundle = await call(
      token, 'POST', `${UPLOAD}/edits/${id}/bundles?uploadType=media`,
      fs.readFileSync(aab), 'application/octet-stream'
    );
    const status = draft ? 'draft' : rollout && rollout < 1 ? 'inProgress' : 'completed';
    await call(token, 'PUT', `${API}/edits/${id}/tracks/${track}`, {
      track,
      releases: [{
        name: typeof arg('name') === 'string' ? arg('name') : undefined,
        versionCodes: [String(bundle.versionCode)],
        status,
        ...(status === 'inProgress' ? { userFraction: rollout } : {}),
        releaseNotes: Object.entries(notes).map(([language, text]) => ({ language, text })),
      }],
    });
    return bundle.versionCode;
  });
  console.log(`Committed: versionCode ${versionCode} on ${track}${draft ? ' (draft)' : ''}.`);
}

async function listing() {
  const blocks = asoBlocks();
  const { token } = await accessToken();
  await withEdit(token, true, async (id) => {
    for (const [language, body] of Object.entries(blocks)) {
      await call(token, 'PUT', `${API}/edits/${id}/listings/${language}`, { language, ...body });
      console.log(`  listing ${language}: "${body.title}"`);
    }
  });
  console.log('Listing text committed.');
}

async function images() {
  const { token } = await accessToken();
  await withEdit(token, true, async (id) => {
    for (const [language, folder] of Object.entries(LANGS)) {
      const dir = path.join(ROOT, 'store/out', folder);
      const sets = {
        phoneScreenshots: Array.from({ length: 8 }, (_, i) => path.join(dir, `screenshot-${i + 1}.png`)),
        featureGraphic: [path.join(dir, 'feature-graphic.png')],
        icon: [path.join(ROOT, 'store/out/play-icon-512.png')],
      };
      for (const [type, files] of Object.entries(sets)) {
        await call(token, 'DELETE', `${API}/edits/${id}/listings/${language}/${type}`);
        for (const file of files) {
          await call(
            token, 'POST', `${UPLOAD}/edits/${id}/listings/${language}/${type}?uploadType=media`,
            fs.readFileSync(file), 'image/png'
          );
        }
        console.log(`  ${language} ${type}: ${files.length}`);
      }
    }
  });
  console.log('Store images committed.');
}

const commands = { check, release, listing, images };
const command = commands[process.argv[2]];
if (!command) {
  console.error('Usage: node scripts/play-release.js check|release|listing|images [options]');
  process.exit(1);
}
command().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
