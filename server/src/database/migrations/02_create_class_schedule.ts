import Knex from 'knex';

//cria tabela e altera campo
export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', (table) => {
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        //CRIANDO RELACIONAMENTO
        table.integer('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      
    })
}

//voltar a alteraçao e remover a tabela (VOLTAR ATRAS)
export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule');
}