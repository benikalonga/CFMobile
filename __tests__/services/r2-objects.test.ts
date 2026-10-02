import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import * as api from '@/services/cloudflare';

const accountId = 'acct123';
const bucket = 'my-bucket';

beforeAll(async () => {
  await initTestClient();
});

describe('R2 Objects', () => {
  it('getR2Objects lists objects and unwraps result_info paging fields', async () => {
    const objects = [
      { key: 'file1.txt', size: 10, etag: 'abc', last_modified: '2024-01-01T00:00:00Z' },
    ];
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/r2/buckets/${bucket}/objects`, (req, res, ctx) => {
        expect(req.url.searchParams.get('per_page')).toBe('100');
        return res(
          ctx.json({
            success: true,
            errors: [],
            messages: [],
            result: objects,
            result_info: { cursor: 'next-cursor', is_truncated: true },
          })
        );
      })
    );

    const res = await api.getR2Objects(accountId, bucket);
    expect(res.objects).toEqual(objects);
    expect(res.cursor).toBe('next-cursor');
    expect(res.isTruncated).toBe(true);
  });

  it('getR2Objects passes cursor and prefix params when provided', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/r2/buckets/${bucket}/objects`, (req, res, ctx) => {
        expect(req.url.searchParams.get('cursor')).toBe('abc');
        expect(req.url.searchParams.get('prefix')).toBe('folder/');
        return res(ctx.json({ success: true, errors: [], messages: [], result: [] }));
      })
    );

    const res = await api.getR2Objects(accountId, bucket, 'abc', 'folder/');
    expect(res.objects).toEqual([]);
    expect(res.isTruncated).toBe(false);
  });

  it('getR2Objects defaults to empty objects/isTruncated=false when result fields are missing', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/r2/buckets/${bucket}/objects`, (_req, res, ctx) =>
        res(ctx.json({ success: true, errors: [], messages: [] }))
      )
    );

    const res = await api.getR2Objects(accountId, bucket);
    expect(res.objects).toEqual([]);
    expect(res.cursor).toBeUndefined();
    expect(res.isTruncated).toBe(false);
  });

  it('deleteR2Object deletes an object by (encoded) key', async () => {
    let hitUrl = '';
    server.use(
      rest.delete(`${API_BASE}/accounts/${accountId}/r2/buckets/${bucket}/objects/folder%2Ffile.txt`, (req, res, ctx) => {
        hitUrl = req.url.pathname;
        return res(ctx.status(204));
      })
    );

    await api.deleteR2Object(accountId, bucket, 'folder/file.txt');
    expect(hitUrl).toContain('folder%2Ffile.txt');
  });

  it('uploadR2Object PUTs the body with the given content type', async () => {
    let receivedContentType: string | null = null;
    let receivedBody = '';
    server.use(
      rest.put(`${API_BASE}/accounts/${accountId}/r2/buckets/${bucket}/objects/file1.txt`, async (req, res, ctx) => {
        receivedContentType = req.headers.get('content-type');
        receivedBody = await req.text();
        return res(ctx.status(200));
      })
    );

    await api.uploadR2Object(accountId, bucket, 'file1.txt', 'hello world', 'text/plain');
    expect(receivedContentType).toBe('text/plain');
    expect(receivedBody).toBe('hello world');
  });

  it('getR2ObjectUrl builds the direct object URL with an encoded key', () => {
    const url = api.getR2ObjectUrl(accountId, bucket, 'folder/file.txt');
    expect(url).toBe(`${API_BASE}/accounts/${accountId}/r2/buckets/${bucket}/objects/folder%2Ffile.txt`);
  });

  it('getAuthHeaders returns a Bearer Authorization header for a token auth', async () => {
    const headers = api.getAuthHeaders();
    expect(headers.Authorization).toContain('Bearer');
  });

  it('deleteR2Object rejects on a Cloudflare/HTTP error', async () => {
    server.use(
      rest.delete(`${API_BASE}/accounts/${accountId}/r2/buckets/${bucket}/objects/file1.txt`, (_req, res, ctx) =>
        res(ctx.status(404))
      )
    );

    await expect(api.deleteR2Object(accountId, bucket, 'file1.txt')).rejects.toBeTruthy();
  });
});
