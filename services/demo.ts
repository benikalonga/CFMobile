import { Platform } from 'react-native';

/**
 * Demo data for store screenshots and UI work. Development builds only.
 *
 * When switched on (Settings → Developer → Demo data), every Cloudflare API
 * request is answered from the fixtures below instead of the network, so
 * screenshots never show a real account's domains, IPs or email. The AI
 * features still call the real AI service, but only ever see this demo data.
 *
 * cloudflare.ts loads this module behind `__DEV__`, so none of it reaches a
 * release bundle.
 */

const KEY = 'cf_demo_mode';
let enabled = false;
let loaded = false;

const storage = {
  get: async (): Promise<string | null> => {
    if (Platform.OS === 'web') return localStorage.getItem(KEY);
    return require('expo-secure-store').getItemAsync(KEY);
  },
  set: async (value: string): Promise<void> => {
    if (Platform.OS === 'web') { localStorage.setItem(KEY, value); return; }
    return require('expo-secure-store').setItemAsync(KEY, value);
  },
};

/** Read the flag once. Call before the first API request. */
export async function loadDemoMode(): Promise<boolean> {
  if (!loaded) {
    enabled = (await storage.get().catch(() => null)) === 'true';
    loaded = true;
    // Keep development warning toasts out of screenshots.
    if (enabled) require('react-native').LogBox.ignoreAllLogs(true);
  }
  return enabled;
}

export function isDemoMode(): boolean {
  return enabled;
}

export async function setDemoMode(value: boolean): Promise<void> {
  enabled = value;
  loaded = true;
  await storage.set(value ? 'true' : 'false');
}

// ─── Fixtures ────────────────────────────────────────────────────────────────

const ACCOUNT = { id: 'demo0000000000000000000000000001', name: 'Northwind Labs', type: 'standard' };

const USER = {
  id: 'demo-user',
  email: 'demo_user@fakeemail.com',
  username: 'alexrivera',
  first_name: 'Alex',
  last_name: 'Rivera',
  telephone: null,
  country: 'US',
  organizations: [],
};

const plan = (name: string, price: number) => ({
  id: name.toLowerCase().replace(/\s+/g, '-'),
  name,
  price,
  currency: 'USD',
  frequency: 'monthly',
  is_subscribed: price > 0,
});

const zone = (n: number, name: string, planName: string, price: number, extra: Record<string, unknown> = {}) => ({
  id: `demozone${String(n).padStart(24, '0')}`,
  name,
  status: 'active',
  paused: false,
  type: 'full',
  development_mode: 0,
  name_servers: ['ada.ns.cloudflare.com', 'theo.ns.cloudflare.com'],
  original_name_servers: [],
  original_registrar: null,
  modified_on: '2026-09-20T08:12:00Z',
  created_on: `${2021 + (n % 4)}-03-14T10:00:00Z`,
  activated_on: `${2021 + (n % 4)}-03-14T11:00:00Z`,
  plan: plan(planName, price),
  account: { id: ACCOUNT.id, name: ACCOUNT.name },
  ...extra,
});

const ZONES = [
  zone(1, 'northwind.dev', 'Pro Website', 25),
  zone(2, 'acme-store.com', 'Business Website', 250),
  zone(3, 'lumenstudio.io', 'Pro Website', 25),
  zone(4, 'kopisenja.id', 'Free Website', 0),
  zone(5, 'atlasdocs.org', 'Free Website', 0),
  zone(6, 'paperplane.app', 'Free Website', 0, { status: 'pending' }),
];

function dnsRecords(z: (typeof ZONES)[number]) {
  const rec = (
    n: number, type: string, name: string, content: string,
    opts: { proxied?: boolean; ttl?: number; priority?: number } = {}
  ) => ({
    id: `demorec${String(n).padStart(25, '0')}`,
    zone_id: z.id,
    zone_name: z.name,
    name: name === '@' ? z.name : `${name}.${z.name}`,
    type,
    content,
    proxiable: ['A', 'AAAA', 'CNAME'].includes(type),
    proxied: opts.proxied ?? false,
    ttl: opts.ttl ?? 1,
    locked: false,
    created_on: '2026-01-10T09:00:00Z',
    modified_on: '2026-08-02T15:30:00Z',
    ...(opts.priority !== undefined ? { priority: opts.priority } : {}),
  });
  return [
    rec(1, 'A', '@', '203.0.113.10', { proxied: true }),
    rec(2, 'A', 'api', '203.0.113.24', { proxied: true }),
    rec(3, 'A', 'staging', '198.51.100.7', { ttl: 300 }),
    rec(4, 'AAAA', '@', '2001:db8::10', { proxied: true }),
    rec(5, 'CNAME', 'www', z.name, { proxied: true }),
    rec(6, 'CNAME', 'blog', 'northwind.ghost.io', { proxied: true }),
    rec(7, 'CNAME', 'docs', 'northwind-docs.pages.dev', { proxied: true }),
    rec(8, 'CNAME', 'status', 'stats.uptimerobot.com', { ttl: 3600 }),
    rec(9, 'MX', '@', 'aspmx.l.google.com', { priority: 1 }),
    rec(10, 'MX', '@', 'alt1.aspmx.l.google.com', { priority: 5 }),
    rec(11, 'TXT', '@', 'v=spf1 include:_spf.google.com ~all'),
    rec(12, 'TXT', '_dmarc', `v=DMARC1; p=quarantine; rua=mailto:dmarc@${z.name}`),
  ];
}

const SETTINGS: Record<string, unknown> = {
  ssl: 'full',
  always_use_https: 'off',
  min_tls_version: '1.0',
  tls_1_3: 'on',
  automatic_https_rewrites: 'on',
  opportunistic_encryption: 'on',
  security_level: 'medium',
  browser_check: 'on',
  cache_level: 'aggressive',
  browser_cache_ttl: 14400,
  development_mode: 'off',
  brotli: 'on',
  http2: 'on',
  http3: 'on',
  '0rtt': 'off',
  websockets: 'on',
  ipv6: 'on',
  early_hints: 'on',
  rocket_loader: 'off',
  email_obfuscation: 'on',
  hotlink_protection: 'off',
};

const setting = (id: string) => ({ id, value: SETTINGS[id] ?? 'off', editable: true, modified_on: '2026-08-02T15:30:00Z' });

const WAF = {
  id: 'demoruleset0000000000000000000001',
  name: 'default',
  phase: 'http_request_firewall_custom',
  kind: 'zone',
  rules: [
    {
      id: 'demorule000000000000000000000001',
      action: 'block',
      expression: '(http.request.uri.path contains "/wp-login.php" and not ip.geoip.country in {"US" "ID"})',
      description: 'Block login probes from abroad',
      enabled: true,
    },
    {
      id: 'demorule000000000000000000000002',
      action: 'managed_challenge',
      expression: '(cf.threat_score gt 14)',
      description: 'Challenge suspicious visitors',
      enabled: true,
    },
    {
      id: 'demorule000000000000000000000003',
      action: 'skip',
      expression: '(http.user_agent contains "UptimeRobot")',
      description: 'Let the uptime monitor through',
      enabled: true,
    },
  ],
};

const IP_RULES = [
  { id: 'demoip01', mode: 'block', configuration: { target: 'ip_range', value: '198.51.100.0/24' }, notes: 'Scraper network' },
  { id: 'demoip02', mode: 'whitelist', configuration: { target: 'ip', value: '203.0.113.42' }, notes: 'Office' },
];

const worker = (id: string, day: number) => ({
  id,
  etag: 'demo',
  handlers: ['fetch'],
  modified_on: `2026-09-${String(day).padStart(2, '0')}T12:00:00Z`,
  created_on: '2025-11-02T12:00:00Z',
  usage_model: 'standard',
  logpush: false,
});

const WORKERS = [worker('api-gateway', 24), worker('image-resizer', 18), worker('auth-edge', 11), worker('cron-reports', 3)];

const KV = [
  { id: 'demokv01', title: 'SESSIONS', supports_url_encoding: true },
  { id: 'demokv02', title: 'FEATURE_FLAGS', supports_url_encoding: true },
  { id: 'demokv03', title: 'RATE_LIMITS', supports_url_encoding: true },
];

const R2 = [
  { name: 'user-uploads', creation_date: '2025-06-01T00:00:00Z', location: 'APAC' },
  { name: 'static-assets', creation_date: '2025-02-11T00:00:00Z', location: 'WNAM' },
  { name: 'backups', creation_date: '2024-12-20T00:00:00Z', location: 'EEUR' },
];

const page = (name: string, branch = 'main') => ({
  id: `demo-${name}`,
  name,
  subdomain: `${name}.pages.dev`,
  domains: [`${name}.pages.dev`],
  created_on: '2025-04-09T00:00:00Z',
  production_branch: branch,
  latest_deployment: { id: 'demo-deploy', url: `https://${name}.pages.dev`, environment: 'production', created_on: '2026-09-25T07:00:00Z' },
});

const PAGES = [page('northwind-web'), page('northwind-docs'), page('lumen-landing', 'production')];

const D1 = [
  { uuid: 'demod1-0001', name: 'orders-db', version: 'production', num_tables: 12, file_size: 4_812_800, created_at: '2025-07-01T00:00:00Z' },
  { uuid: 'demod1-0002', name: 'analytics-events', version: 'production', num_tables: 5, file_size: 18_350_080, created_at: '2025-09-15T00:00:00Z' },
];

/** A believable week-shaped traffic curve, the same every time it is asked for. */
function analyticsGroups(from: string, to: string) {
  const groups: unknown[] = [];
  const start = new Date(`${from}T00:00:00Z`).getTime();
  const end = new Date(`${to}T00:00:00Z`).getTime();
  const day = 24 * 60 * 60 * 1000;
  for (let t = start, i = 0; t <= end && i < 31; t += day, i++) {
    const d = new Date(t);
    const weekday = d.getUTCDay();
    const weekend = weekday === 0 || weekday === 6;
    const wave = Math.sin(i / 2.3) * 0.12 + Math.cos(i / 5.1) * 0.08;
    const requests = Math.round(248_000 * (1 + wave) * (weekend ? 0.78 : 1) * (1 + i * 0.012));
    const cachedRequests = Math.round(requests * (0.71 + Math.sin(i / 3) * 0.04));
    const bytes = requests * 41_300;
    groups.push({
      dimensions: { date: d.toISOString().slice(0, 10) },
      sum: {
        requests,
        cachedRequests,
        bytes,
        cachedBytes: Math.round(bytes * 0.78),
        pageViews: Math.round(requests * 0.31),
        threats: Math.round(420 + Math.abs(Math.sin(i * 1.7)) * 760 + (i % 7 === 3 ? 1400 : 0)),
      },
      uniq: { uniques: Math.round(requests * 0.094) },
    });
  }
  return groups;
}

// ─── Adapter ─────────────────────────────────────────────────────────────────

const ok = (result: unknown, count?: number) => ({
  success: true,
  errors: [],
  messages: [],
  result,
  ...(count !== undefined
    ? { result_info: { page: 1, per_page: 50, count, total_count: count, total_pages: 1 } }
    : {}),
});

function route(method: string, path: string, params: Record<string, any>, body: any): unknown {
  // GraphQL analytics (absolute URL)
  if (path.endsWith('/graphql')) {
    const query = String(body?.query ?? '');
    const from = query.match(/date_geq:\s*"([\d-]+)"/)?.[1];
    const to = query.match(/date_leq:\s*"([\d-]+)"/)?.[1];
    if (from && to) return { data: { viewer: { zones: [{ httpRequests1dGroups: analyticsGroups(from, to) }] } } };
    return { data: { viewer: { zones: [{ zoneTag: 'demo', httpRequests1hGroups: [] }] } } };
  }

  // Anything that changes state just reports success: demo data is read-only.
  if (method !== 'get') {
    const settingId = path.match(/\/settings\/([^/]+)$/)?.[1];
    if (settingId) return ok({ id: settingId, value: body?.value, editable: true });
    return ok({ id: 'demo' });
  }

  if (path === '/user') return ok(USER);
  if (path === '/accounts') return ok([ACCOUNT], 1);
  if (path === '/user/tokens/verify') return ok({ id: 'demo', status: 'active' });

  if (path === '/zones') {
    const q = String(params?.name ?? '').toLowerCase();
    const list = q ? ZONES.filter((z) => z.name.includes(q)) : ZONES;
    return ok(list, list.length);
  }

  const zoneMatch = path.match(/^\/zones\/([^/]+)(\/.*)?$/);
  if (zoneMatch) {
    const z = ZONES.find((x) => x.id === zoneMatch[1]) ?? ZONES[0];
    const rest = zoneMatch[2] ?? '';
    if (rest === '') return ok(z);
    if (rest === '/dns_records') {
      const q = String(params?.name ?? '').toLowerCase();
      const list = dnsRecords(z).filter(
        (r) => (!params?.type || r.type === params.type) && (!q || r.name.toLowerCase().includes(q))
      );
      return ok(list, list.length);
    }
    if (rest === '/dns_records/usage') return ok({ record_usage: dnsRecords(z).length, record_quota: 3500 });
    const recordId = rest.match(/^\/dns_records\/([^/]+)$/)?.[1];
    if (recordId) return ok(dnsRecords(z).find((r) => r.id === recordId) ?? dnsRecords(z)[0]);
    if (rest === '/dns_settings') return ok(null);
    if (rest === '/settings') return ok(Object.keys(SETTINGS).map(setting));
    const settingId = rest.match(/^\/settings\/([^/]+)$/)?.[1];
    if (settingId) return ok(setting(settingId));
    if (rest === '/hold') return ok({ hold: false });
    if (rest === '/dnssec') return ok({ status: 'active' });
    if (rest === '/ssl/verification') {
      return ok([{ cert_pack_uuid: 'demo', hostname: z.name, certificate_status: 'active', expires_on: '2027-01-18T00:00:00Z' }]);
    }
    if (rest.endsWith('/phases/http_request_firewall_custom/entrypoint')) return ok(WAF);
    if (rest === '/firewall/rules') return ok([], 0);
    if (rest === '/firewall/access_rules/rules') return ok(IP_RULES, IP_RULES.length);
    return ok([], 0);
  }

  const accountMatch = path.match(/^\/accounts\/[^/]+(\/.*)$/);
  if (accountMatch) {
    const rest = accountMatch[1];
    if (rest === '/workers/scripts') return ok(WORKERS, WORKERS.length);
    if (rest === '/storage/kv/namespaces') return ok(KV, KV.length);
    if (rest === '/r2/buckets') return ok({ buckets: R2 });
    if (rest === '/pages/projects') return ok(PAGES, PAGES.length);
    if (rest === '/d1/database') return ok(D1, D1.length);
    return ok([], 0);
  }

  return ok([], 0);
}

/** Axios adapter: answers a request from the fixtures after a short, realistic delay. */
export function demoAdapter(config: any): Promise<any> {
  const url = String(config.url ?? '');
  const path = url.startsWith('http') ? url.replace(/^https?:\/\/[^/]+(\/client\/v4)?/, '') : url;
  let body: any = config.data;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = undefined; }
  }
  const data = route(String(config.method ?? 'get').toLowerCase(), path.split('?')[0], config.params ?? {}, body);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data, status: 200, statusText: 'OK', headers: {}, config, request: {} }), 120)
  );
}
