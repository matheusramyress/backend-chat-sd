const bd = {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/src/database/migrations',
    }
}
module.exports=bd;

// const bd = {
//   client: "pg",
//   connection: {
//     host : 'localhost',
//     database: 'sd',
//     user:     'postgres',
//     password: 'postgres'
//   },
//   pool: {
//     min: 2,
//     max: 10
//   },
//   migrations: {
//     directory: __dirname + '/src/database/migrations',
//   }
// }
// module.exports=bd;


