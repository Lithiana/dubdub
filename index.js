var express = require("express");
var db = require("./models");
var apiUser = require("./api/user");
var apiEvent = require("./api/event");

var app = express();
apiUser(app, db);
apiEvent(app, db);

const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log("Server running at http://localhost:%d", port);
});