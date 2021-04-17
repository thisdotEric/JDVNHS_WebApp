import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('student', (table: Knex.TableBuilder) => {
    table.increments('student_id').notNullable().unique().primary();
    table.string('first_name').notNullable();
    table.string('middle_name').notNullable();
    table.string('last_name').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('student');
}