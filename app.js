
require('dotenv').config();
const express = require("express");
const date = require(__dirname + "/date.js");

// initializes app
const app = express();

// makes the build foder in the client folder static so as to be able to serve it up
app.use(express.static("client/build"));

//The home route where people get connected to
app.route("/")
.get( (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});


// the route where the client connects to inorder to get the greeting
app.route("/"+ process.env.REACT_APP_ROUTE_ID +"/greetings")
  .get((req, res) => {

    // the greeting is gotten form an external module called date.js
    res.send(date.getHour());

  });

// the server is listen on port 5000
const port = 5000;
app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
