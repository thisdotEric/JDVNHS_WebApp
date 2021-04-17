import knex, { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    'attendance_list',
    (table: Knex.TableBuilder) => {
      table.integer('student_id');
      table.boolean('is_present');
      table.integer('attendance_id');

      table.foreign('student_id').references('student_id').inTable('student');

      table
        .foreign('attendance_id')
        .references('attendance_id')
        .inTable('attendance');
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('attendance_list');
}
