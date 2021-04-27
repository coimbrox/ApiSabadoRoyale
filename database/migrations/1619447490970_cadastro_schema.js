'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CadastroSchema extends Schema {
  up () {
    this.create('cadastros', (table) => {
      table.increments()
      table.string('IdActvision', 80).notNullable()
      table.string('telefone', 254).notNullable()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('cadastros')
  }
}

module.exports = CadastroSchema
