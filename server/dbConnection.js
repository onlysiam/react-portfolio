const mysql = require("mysql");
const util = require("util");
require("dotenv").config();
//Database Connection
const db = mysql.createConnection({
  user: "onlysiam_portfolio",
  host: "localhost",
  password: process.env.DB_PASSWORD,
  database: "onlysiam_onlysiam",
  // user: "root",
  // host: "localhost",
  // password: process.env.LOCALDB_PASSWORD,
  // database: "onlysiam_weathercloset",
});

const query = util.promisify(db.query).bind(db);

module.exports = { db, query };
