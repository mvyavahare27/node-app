//importing node framework
var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send('Test Hello World');
});

app.listen(3000, function () {
    console.log("app starting on port: " + 3000);
});

module.exports = app;