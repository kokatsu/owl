import { parseArgs } from 'node:util';

export default class Owl {
  run = async () => {
    const { positionals } = parseArgs({
      args: Bun.argv.slice(2),
      strict: true,
      allowPositionals: true,
    });

    switch (positionals.at(0)) {
      default:
        console.log('Hello via Bun!');
    }
  };
}
