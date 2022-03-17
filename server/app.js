const express = require('express');
/*Server should log each request using morgan's dev format
Server should indicate when it is listening and on which port
Server should respond to GET requests to /?i=tt3896198 with movie data
Server should respond to GET requests to /?i=tt3896198 with movie data without fetching from the OMDb API
Server should respond to GET requests to /?t=baby%20driver with movie data
Server should respond to GET requests to /?t=baby%20driver with movie data, without fetching from the OMDb API
All tests should pass*/
//dkddkkk
//dddddddd

const app = express();

// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter

module.exports = app;