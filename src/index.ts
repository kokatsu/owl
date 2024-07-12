import { parseArgs } from 'node:util';

import { convert } from './convert';
import { date } from './date';

export default class Owl {
  run = async () => {
    const { positionals } = parseArgs({
      args: Bun.argv.slice(2),
      strict: true,
      allowPositionals: true,
    });

    switch (positionals.at(0)) {
      case 'date':
        await date();
        break;
      case 'png':
        await convert(positionals.at(1), 'png');
        break;
      default:
        console.log('Hello via Bun!');
    }
  };
}
