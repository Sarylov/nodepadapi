const Pool = require("pg").Pool;
const pool = new Pool({
  // localhost db
  user: "postgres",
  // password: "123124321",
  // host: "localhost",
  // port: "5432",
  // database: "notepad",
  connectionString:
    "postgres://lgvjaoyfojkalj:3815f73e1bfbee65566de22cfdf37afaa08801b5f19da8ec23c8de3225349436@ec2-63-32-248-14.eu-west-1.compute.amazonaws.com:5432/dci4rtkpcuo3bi",
  ssl: {
    rejectUnauthorized: false,
  },
  // ssl: true,
});

module.exports = pool;
