
// DEPENDENCIES
var path = require('path');
var friends = require('../data/friends.js');


// a get route with url `/api/friends` to display json of all possible friends
module.exports = function(app) {

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

//a post route `/api/friends to handle incoming survey results and to handle the compatibility logic
// Create New friends - takes in JSON input
app.post("/api/new", function(req, res) {
    var newFriends = req.body;
    newFriends.routeName = newFriends.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriends);

    friends.push(newFriends);

    res.json(newFriends);
});

}


