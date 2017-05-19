var path = require('path');

module.exports = function(app) {

//  localhost:3000/survey takes us to survey page, / or /home takes us to home page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //if route does not work, default user to home page
    app.use("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.use("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}
