// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//requiring models
var Article = require("./models/Article");

//initialize express app
var app = express();
//declare port
var port = process.env.PORT || 8082;

//Use Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content
app.use(express.static(process.cwd() + "/public"));

// -------------------------------------------------
// MongoDB Configuration
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Set up an Express Router
var router = express.Router();

// Require routes file pass router object
require("./config/expressRoutes")(router);

app.use(router);

// -------------------------------------------------

app.listen(port, function() {
  console.log("App running on port " + port + "!");
});
