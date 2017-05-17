// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars friends (DATA)
// =============================================================
var friends = [];

//***************************
// Basic route that sends the user first to the AJAX Page
          // app.get("/", function(req, res) {
          //   res.sendFile(path.join(__dirname, "home.html"));
          // });

          // app.get("/survey", function(req, res) {
          //   res.sendFile(path.join(__dirname, "survey.html"));
          // });

          // app.get("/home", function(req, res) {
          //   res.sendFile(path.join(__dirname, "home.html"));
          // });
//***************************



// Search for Specific Character (or all friends) - provides JSON
app.get("/api/:friends?", function(req, res) {
  var chosen = req.params.friends;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }

    return res.json(false);
  }
  return res.json(friends);
});

//***************************
//a post route `/api/friends to handle incoming survey results and to handle the compatibility logic
// Create New friends - takes in JSON input
              // app.post("/api/new", function(req, res) {
              //     var newFriends = req.body;
              //     newFriends.routeName = newFriends.name.replace(/\s+/g, "").toLowerCase();

              //     console.log(newFriends);

              //     friends.push(newFriends);

              //     res.json(newFriends);
              // });

//***************************
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
