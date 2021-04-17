import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('student', (table: Knex.TableBuilder) => {
    table.string('email');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('student', (table: Knex.TableBuilder) => {
    table.dropColumn('email');
  });
}
