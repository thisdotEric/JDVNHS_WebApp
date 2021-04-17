import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('attendance', (table: Knex.TableBuilder) => {
    table.increments('attendance_id').primary().notNullable().unique();
    table.string('subject_ID');
    table.date('session_date');
    table.integer('semester');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('attendance');
}
