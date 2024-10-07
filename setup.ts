import { afterEach, beforeEach, mock } from 'bun:test';

const originalConsoleLog = console.log;

beforeEach(() => {
  console.log = mock();
});

afterEach(() => {
  console.log = originalConsoleLog;
});
