import Knex from 'knex';

//cria tabela e altera campo
export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        //CRIANDO RELACIONAMENTO
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      
        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}

//voltar a alteraçao e remover a tabela (VOLTAR ATRAS)
export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}