var express = require('express');
var bodyParser = require("body-parser");
var monk = require('monk');	//we use monk to talk to MongoDB
var db = monk('mongo:27017/nodetest1');	//our database is nodetest1
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var http = require('http');
var path = require('path');
var fs = require('fs');
const users = require('./users');
const projects = require('./projects');
const userStories = require('./userStories');

/*
var routes = require('./routes/index');
var users = require('./routes/users');
*/
var app = express();
var router=express.Router();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Make our db accessible to our router
router.use(function (req, res, next) {
    req.db = db;
    next();
});

// API location
router.use('/api/users', users);
router.use('/api/projects', projects);
router.use('/api/userStories', userStories);

//We can test the POST with CURL commands like (localhost example) :
//curl --data rl --data "name=Perez&surname=Mathieu&login=mperez&password=mp33" http://localhost:8080/api/users/
//curl --data rl --data "name=Humus&description=TreslongueDescription&login=mperez" http://localhost:8080/api/projects/
//curl --data rl --data "name=Humus&description=TreslongueDescription&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjOTNhZmUwNDU4ZjAzNGQ5ZGJlMWUiLCJuYW1lIjoiUHJlc3RhdCIsInN1cm5hbWUiOiJEaW1pdHJpIiwibG9naW4iOiJkcHJlc3RhdCIsInBhc3N3b3JkIjoiZHAzMyIsImlhdCI6MTUxMDc3MzY4OH0.DulBB-8fzxOpGODepAfmLzMiO-zACa5eK2kaO8x_oHU" http://localhost:8080/api/projects/
//curl -X PUT --data "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjOTNhZmUwNDU4ZjAzNGQ5ZGJlMWUiLCJuYW1lIjoiUHJlc3RhdCIsInN1cm5hbWUiOiJEaW1pdHJpIiwibG9naW4iOiJkcHJlc3RhdCIsInBhc3N3b3JkIjoiZHAzMyIsInByb2plY3RzIjpbIkh1bXVzIl0sImlhdCI6MTUxMDc4MDExNX0.w6DjZYUL95QMqFs8nm1UuNekyHeC7a85-OvsHWLZYZQ" http://localhost:8080/api/projects/Humus/users/mperez

//Test procedures :
//npm i
//for installing dependencies
//in a terminal
//mongodb --dbpath nodes_modules/data/
// in an other terminal
//node api.js
//You can now access http://localhost:8080/api/* !

//Temporally, in the future, set the config in a json file.

app.set('superSecret', "12345"); // secret variable

// route middleware to verify a token
function verifyAuth(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                res.success(401).json({success: false, message: 'Failed to authenticate token.'});
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        res.status(401).send({
            success: false,
            message: 'No token provided.'
        });
    }

}

////// Attach application /////

// Catch all other routes and return an application file
router.get(['/', '/:requested'], function (req, res, next) {
    var requestedFileName = req.params.requested ? req.params.requested : 'index.html';

    var requestedPath = path.join(__dirname, '../web-app/dist', requestedFileName);

    // if redirected file exists, then redirect it else go to next catch
    if (fs.existsSync(requestedPath)) {
        res.sendFile(requestedPath);
    }
    else {
        next();
    }
});

///// else page introuvable
router.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

// Get port from environment and store in Express.
var port = process.env.PORT || '8080';
app.set('port', port);

// Create HTTP server.
var server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, function () {
    console.log("API running on localhost:" + port);
});
