jest.mock('expo-secure-store');

// Expo's ReadableStream/fetch polyfills (injected globally by the jest-expo
// preset) crash axios's fetch-adapter feature detection at module load time.
// We only need the plain Node http adapter for these tests, so drop them.
delete global.ReadableStream;
delete global.fetch;
delete global.Request;
delete global.Response;
delete global.Headers;
