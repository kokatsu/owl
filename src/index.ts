import { parseArgs } from 'node:util';
import { config } from 'dotenv';

import { convert } from './convert';
import { date } from './date';
import { hoot } from './hoot';
import { ulid } from './ulid';
import { uuid } from './uuid';

export default class Owl {
  run = async () => {
    const { parsed, error } = config({ path: `${import.meta.dir}/../.env` });
    if (error) {
      throw error;
    }

    process.env = { ...process.env, ...parsed };

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
      case 'hoot':
        hoot();
        break;
      case 'ulid':
        ulid();
        break;
      case 'uuid':
        uuid();
        break;
      default:
        hoot();
    }
  };
}
