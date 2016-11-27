//Express module for server side app things
var express = require('express');
//Module for combining file system paths
var path = require('path');
//Module for parsing and understanding the body of request recieved
var bodyParser = require('body-parser');
//Module for all file system operations- getters etc
var fs = require('fs');

//Initializing express app
var app = express();


//Making the public js and html and css files public to the browser
app.use(express.static(path.join(__dirname, 'pubic')));
app.use(express.static(path.join(__dirname, 'app_client')));


/*
When the request is recieved, go through 2 'middlewares'.
First will send the index file located at app_client/index.html
Second will send an error message.
It will only get to the second 'middleware' if somethng goes wrong in the first one
*/

app.use(function (req, res) {
    res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});

app.use(function (req, res, next) {
    res.send("Woops, something went wrong");
})

module.exports = app;