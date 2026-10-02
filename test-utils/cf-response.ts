export function cfResponse<T>(result: T, overrides: Partial<{ success: boolean; errors: any[]; messages: any[] }> = {}) {
  return {
    success: true,
    errors: [],
    messages: [],
    result,
    ...overrides,
  };
}

export function cfError(message: string, code = 1000) {
  return {
    success: false,
    errors: [{ code, message }],
    messages: [],
    result: null,
  };
}
