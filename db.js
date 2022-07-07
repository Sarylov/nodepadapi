const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "123124321",
  host: "localhost",
  port: "5432",
  database: "notepad",
});

module.exports = pool;
