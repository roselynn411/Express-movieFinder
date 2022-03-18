//Install Express, Axios and Morgan

// const express = require('express');
const express = require('express');
//install axios
const axios = require('axios');
//install morgan
const morgan = require('morgan');
//save express framework within app
//.
const app = express();
var cache = {};
//log each request using morgan's dev format.
app.use(morgan("dev"));

//Server should respond to GET requests to /?i=tt3896198 with movie data.
app.get('/', function (req, res) {
    let path = req.url;
    
    console.log("Path", path);

    if (path === '/') {
        return res.send("No title or movie id provided!");
    }

    // if path is the same as before get it from cache^
    //http://www.omdbapi.com/?i=tt3896198&apikey=8730e0e

    if (cache[path]) {
        console.log("Getting movie from cache...");
        return res.json(cache[path]);
    }

    console.log("Getting movie from OMDB...");    
    //otherwise go to api
    axios
        .get('http://www.omdbapi.com' + path + '&apikey=8730e0e')
        .then(function (response) {
            let data = response.data;

            cache[path] = data;
            res.status(200).json(data);
        })
        .catch(function (error) {
            res.status(200).json(error.message);
        })
    });
//you ot this baby girl a;dksdjksjdjd
    // When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter

    module.exports = app;