import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('subject', (table: Knex.TableBuilder) => {});
}

export async function down(knex: Knex): Promise<void> {}
