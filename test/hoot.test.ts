import { expect, spyOn, test } from 'bun:test';
import { hoot } from '../src/hoot';

test('hoot function logs correct output', () => {
  const consoleSpy = spyOn(console, 'log');
  hoot();
  expect(consoleSpy).toHaveBeenCalledTimes(2);
  expect(consoleSpy.mock.calls[0][0]).toContain('(O,O)');
  expect(consoleSpy.mock.calls[1][0]).toBe('Hello via Bun!');

  consoleSpy.mockRestore();
});
