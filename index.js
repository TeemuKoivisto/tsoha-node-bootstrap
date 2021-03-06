var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// poista kommentit kun haluat laittaa uudestaan sql-taulut
// var test = require("./db/add_test_data");
// test.removeData();
// test.addData();

// var db = require("./db/postgredb_connection");
// db.connect;

var logger = require("morgan");
app.use(logger("dev"));

// var nunjucks = require("nunjucks");
// nunjucks.configure("views", {
    // autoescape: true,
    // express: app
// });

app.set("view engine", "ejs");

app.use(express.static("views/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var router = require("./routes/index");
app.use("", router);

app.set("port", (process.env.PORT || 3000));

app.listen(app.get("port"), function() {
	console.log("App is listening on port", app.get("port"));
});
