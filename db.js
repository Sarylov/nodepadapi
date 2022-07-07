const Pool = require("pg").Pool;
const pool = new Pool({
  // localhost db
  // user: "postgres",
  // password: "123124321",
  // host: "localhost",
  // port: "5432",
  // database: "notepad",
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

module.exports = pool;
