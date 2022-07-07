const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// routs connect
app.use("/api/records", require("./routs/records"));

module.exports = app;
