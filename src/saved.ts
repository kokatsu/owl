import type { SQLiteError } from 'bun:sqlite';
import { $ } from 'bun';
import { db } from './db';
import { directories } from './schema';

export const saved = async (name: string | undefined) => {
  if (!name) {
    throw new Error('Missing required argument');
  }

  const path = await $`pwd`.text();
  await db
    .insert(directories)
    .values({ name: name, path: path })
    .catch((error: SQLiteError) => {
      if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
        throw new Error(`${name} already exists in the database`);
      }
    });
};
