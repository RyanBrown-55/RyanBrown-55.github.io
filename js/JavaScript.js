var pg = require('pg');
var connectionString = "postgresql://postgres:Rb4109001584@axiobasicsql.cqwvizvrtdhi.us-east-1.rds.amazonaws.com:5432/axiobasicsql";
var pgClient = new pg.Client(connectionString);
pgClient.connect();
var query = pgClient.query("SELECT * from YoY_pred LIMIT 1");
