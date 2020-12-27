
exports.up = function(knex) {
    return knex.schema.createTable('message', function (table) {
        table.increments('id').primary();
        table.string('conteudo').notNullable();
        table.string('autor').notNullable();
        table.date('data').notNullable();
        table.string('hora').notNullable();
    })
};

exports.down = function(knex) {
     return knex.schema.dropTable('message');
};
