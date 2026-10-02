/* Turn the Cloudflare OpenAPI schema into one markdown file per product, so the
   whole API surface is greppable from the repo without hitting the network.

   Request and response shapes are included, not just paths — writing a client
   against a path alone means guessing the payload, which is how wrong field
   names get shipped. */
const fs = require('fs');
const path = require('path');

const SRC = process.argv[2];
const OUT = process.argv[3];

const doc = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const METHODS = ['get', 'post', 'put', 'patch', 'delete'];

const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'misc';

/** Follow a local $ref. Depth-guarded because the schema has recursive types. */
function deref(node, seen = new Set()) {
  let cur = node;
  let hops = 0;
  while (cur && cur.$ref && hops < 20) {
    if (seen.has(cur.$ref)) return {};
    seen.add(cur.$ref);
    const parts = cur.$ref.replace(/^#\//, '').split('/');
    let target = doc;
    for (const p of parts) target = target?.[p.replace(/~1/g, '/').replace(/~0/g, '~')];
    cur = target;
    hops++;
  }
  return cur || {};
}

/**
 * Render a schema as an indented field tree. Depth is capped so a deeply nested
 * type does not bury the useful top-level fields.
 */
function describe(schema, depth = 0, seen = new Set()) {
  const s = deref(schema, new Set(seen));
  if (!s || depth > 3) return [];

  for (const combo of ['allOf', 'oneOf', 'anyOf']) {
    if (Array.isArray(s[combo])) {
      // Merge allOf; for one/anyOf show the first variant and say so.
      if (combo === 'allOf') {
        return s[combo].flatMap((x) => describe(x, depth, seen));
      }
      const first = describe(s[combo][0], depth, seen);
      return depth === 0
        ? [`${'  '.repeat(depth)}(one of ${s[combo].length} variants; showing the first)`, ...first]
        : first;
    }
  }

  const pad = '  '.repeat(depth);

  if (s.type === 'array') {
    const inner = describe(s.items, depth, seen);
    return inner.length ? [`${pad}[array of]`, ...inner] : [`${pad}[array]`];
  }

  if (s.properties) {
    const required = new Set(s.required || []);
    const out = [];
    for (const [name, raw] of Object.entries(s.properties)) {
      const p = deref(raw, new Set(seen));
      const type = p.type === 'array'
        ? `${deref(p.items, new Set(seen)).type || 'object'}[]`
        : p.type || (p.properties ? 'object' : 'any');
      const bits = [`${pad}- \`${name}\`: ${type}`];
      if (required.has(name)) bits.push('**required**');
      if (p.enum) bits.push(`enum: ${p.enum.slice(0, 8).map((e) => `\`${e}\``).join(', ')}`);
      if (p.default !== undefined) bits.push(`default: \`${p.default}\``);
      const desc = (p.description || '').split('\n')[0].trim();
      if (desc) bits.push(`— ${desc.slice(0, 140)}`);
      out.push(bits.join(' '));
      if ((p.properties || p.type === 'array') && depth < 2) {
        out.push(...describe(p, depth + 1, seen));
      }
    }
    return out;
  }

  if (s.type && depth === 0) return [`${pad}${s.type}`];
  return [];
}

function bodyOf(op) {
  const rb = deref(op.requestBody);
  const content = rb?.content || {};
  const key = Object.keys(content)[0];
  if (!key) return null;
  return { contentType: key, lines: describe(content[key].schema) };
}

/**
 * Find `result` in a response schema. Cloudflare composes responses with
 * allOf — the envelope in one branch and the payload in another — so a plain
 * `properties.result` lookup misses it and dumps the envelope instead.
 */
function findResult(schema, depth = 0) {
  const s = deref(schema);
  if (!s || depth > 4) return null;
  if (s.properties?.result) return s.properties.result;
  for (const combo of ['allOf', 'oneOf', 'anyOf']) {
    for (const branch of s[combo] || []) {
      const hit = findResult(branch, depth + 1);
      if (hit) return hit;
    }
  }
  return null;
}

function responseOf(op) {
  const responses = op.responses || {};
  const key = Object.keys(responses).find((k) => k.startsWith('2')) || Object.keys(responses)[0];
  if (!key) return null;
  const r = deref(responses[key]);
  const content = r?.content || {};
  const ct = Object.keys(content)[0];
  if (!ct) return null;
  const schema = deref(content[ct].schema);
  const inner = findResult(schema) || schema;
  return { status: key, contentType: ct, lines: describe(inner) };
}

const groups = new Map();

for (const [p, item] of Object.entries(doc.paths || {})) {
  for (const m of METHODS) {
    const op = item[m];
    if (!op) continue;
    const tag = (op.tags && op.tags[0]) || p.split('/').filter(Boolean)[2] || 'misc';
    if (!groups.has(tag)) groups.set(tag, []);

    const all = [...(item.parameters || []), ...(op.parameters || [])].map((x) => deref(x));

    groups.get(tag).push({
      method: m.toUpperCase(),
      path: p,
      summary: (op.summary || '').replace(/\s+/g, ' ').trim(),
      opId: op.operationId || '',
      query: all.filter((x) => x.in === 'query').map((x) => x.name),
      body: bodyOf(op),
      response: responseOf(op),
    });
  }
}

fs.mkdirSync(OUT, { recursive: true });
for (const f of fs.readdirSync(OUT)) {
  if (f.endsWith('.md')) fs.unlinkSync(path.join(OUT, f));
}

const index = [];
for (const [tag, ops] of [...groups].sort((a, b) => a[0].localeCompare(b[0]))) {
  ops.sort((a, b) => a.path.localeCompare(b.path) || a.method.localeCompare(b.method));
  const file = `${slug(tag)}.md`;

  const lines = [`# ${tag}`, '', `${ops.length} endpoints.`, ''];
  for (const o of ops) {
    lines.push(`## ${o.method} ${o.path}`);
    if (o.summary) lines.push('', o.summary);
    const meta = [];
    if (o.opId) meta.push(`operationId: \`${o.opId}\``);
    if (o.query.length) meta.push(`query: ${o.query.map((q) => `\`${q}\``).join(', ')}`);
    if (meta.length) lines.push('', meta.join(' · '));

    if (o.body?.lines?.length) {
      lines.push('', `**Request** (${o.body.contentType})`, '', ...o.body.lines);
    }
    if (o.response?.lines?.length) {
      lines.push('', `**Response** ${o.response.status} → \`result\``, '', ...o.response.lines);
    }
    lines.push('');
  }
  fs.writeFileSync(path.join(OUT, file), lines.join('\n'));
  index.push({ tag, file, count: ops.length });
}

index.sort((a, b) => b.count - a.count);
const total = index.reduce((n, i) => n + i.count, 0);
fs.writeFileSync(
  path.join(OUT, 'README.md'),
  [
    '# Cloudflare API reference',
    '',
    `Generated from the official OpenAPI schema (\`cloudflare/api-schemas\`): ${total} endpoints across ${index.length} products.`,
    'Each entry lists the path, query parameters, request body fields and the unwrapped `result` shape.',
    'Regenerate with `npm run cf:schema && npm run cf:docs`.',
    '',
    '| Product | Endpoints | File |',
    '| --- | ---: | --- |',
    ...index.map((i) => `| ${i.tag} | ${i.count} | [${i.file}](${i.file}) |`),
    '',
  ].join('\n')
);

console.log(`${total} endpoints, ${index.length} products`);
