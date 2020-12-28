const knex = require('knex');

const bd = {
  client: "pg",
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: __dirname + '/src/database/migrations',
  }
}
const connection = knex(bd);

module.exports = connection;