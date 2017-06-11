// Dependencies
var express = require("express");
var mongoose = require("mongoose");

//requiring models
var Article = require("./models/Article");

//initialize express app
var app = express();
//declare port
var port = process.env.PORT || 8080;

//body-parser boilerplate
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
// Routes

// -------------------------------------------------

app.listen(port, function() {
  console.log("App running on port " + port + "!");
});
