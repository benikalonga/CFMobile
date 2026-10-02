import { saveAuth } from '@/services/cloudflare';

export const API_BASE = 'https://api.cloudflare.com/client/v4';
export const TEST_TOKEN = 'test-token-123';

export async function initTestClient(): Promise<void> {
  await saveAuth({ method: 'token', apiToken: TEST_TOKEN });
}
