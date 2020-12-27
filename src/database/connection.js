const knex = require('knex');

const bd = {
    client: "pg",
    connection: {
      host : 'localhost',
      database: 'sd',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/database/migrations',
    }
  }
const connection = knex(bd);

module.exports = connection;