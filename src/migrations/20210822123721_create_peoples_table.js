
export async function up(knex) {
    return knex.schema.createTable('peoples', table => {
        table.increments('id').primary();
        table.string('dni');
        table.string('name');
        table.string('last_name');
        table.timestamps();
    });
}


export async function down(knex) {
    return knex.schema.dropTable('peoples');
}

