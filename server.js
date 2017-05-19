// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();

app.use(express.static(__dirname + '/public'));
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


    //******comparison not yet functioning****
    function compareFriends(arr, num){
      var currentDist = 41;
      for (var i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i]) + Math.abs(num) <currentDist)
        arr[i]
      }
    }