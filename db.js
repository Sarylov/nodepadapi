const Pool = require("pg").Pool;
const pool = new Pool({
  // localhost db
  user: "postgres",
  // password: "123124321",
  // host: "localhost",
  // port: "5432",
  // database: "notepad",
  connectionString:
    "postgres://qyededsbdfwaxv:a6ac020f97a6342e69e89e2369a50cee774fccfc9b345b38c67b116f9da36e0d@ec2-54-155-110-181.eu-west-1.compute.amazonaws.com:5432/dcekun7rtlgl5b",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
