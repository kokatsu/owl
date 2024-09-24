import { expect, spyOn, test } from 'bun:test';
import { hoot } from '../src/hoot';

const consoleSpy = spyOn(console, 'log');

test('hoot function logs correct output', () => {
  hoot();

  expect(consoleSpy).toHaveBeenCalledTimes(2);
  expect(consoleSpy.mock.calls[0][0]).toContain('(O,O)');
  expect(consoleSpy.mock.calls[1][0]).toBe('Hello via Bun!');

  consoleSpy.mockRestore();
});
