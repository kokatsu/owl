import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import uniqueString from 'unique-string';

export const directories = sqliteTable('directories', {
  id: integer('id').notNull().primaryKey({ autoIncrement: true }),
  name: text('name').notNull().unique().default(uniqueString()),
  path: text('path').notNull().default(''),
  usedCount: integer('used_count').notNull().default(0),
  createdAt: text('created_at').notNull().default(sql`(CURRENT_DATE)`),
  updatedAt: text('updated_at').notNull().default(sql`(CURRENT_DATE)`),
});
