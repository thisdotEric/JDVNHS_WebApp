import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('student', (table: Knex.TableBuilder) => {
    table.string('gender');
    table.date('birthdate');
    table.string('address');
    table.string('academic_strand');
    table.string('contact_number');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('student', (table: Knex.TableBuilder) => {
    table.dropColumn('gender');
    table.dropColumn('birthdate');
    table.dropColumn('address');
    table.dropColumn('academic_strand');
    table.dropColumn('contact_number');
  });
}
