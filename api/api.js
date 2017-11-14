var express = require('express');
var bodyParser = require("body-parser");
var monk = require('monk');	//we use monk to talk to MongoDB
var db = monk('localhost:27017/nodetest1');	//our database is nodetest1
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var http = require('http');
var path = require('path');
var fs = require('fs');

/*
var routes = require('./routes/index');
var users = require('./routes/users');
*/
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

//This 2 directives are telling Express what route files to use. Normally it's advocated to set up separate route files for different parts of an app. For example, the users route file might contain routes for adding users, deleting them, updating them, and so forth, while a new route file called "locations" might handle adding, editing, deleting and displaying location data (in an app for which that was required). For now, to keep things simple, I am going to do everything in the index router. That means we can completely ignore the /users line(it's only here as a reminder for later on)
/*
app.use('/', routes);
app.use('/users', users);
*/

var userTest = new Object();
userTest.id = 1;
userTest.name = "Prestat";
userTest.surname = "Dimitri";
userTest.login = "dp33";
userTest.password = "GL";
userTest.projects = [];
userTest.projects[0] = new Object();
userTest.projects[0].id = 1;
userTest.projects[0].name = "bepp";
userTest.projects[0].description = "Ceci est un projet de gestion de projet.";
var userTestJSON = JSON.stringify(userTest);

var projectTest = new Object();
projectTest.id = 1;
projectTest.name = "bepp";
projectTest.description = "Ceci est un projet de gestion de projet.";
projectTest.users = [];
projectTest.users[0] = new Object();
projectTest.users[0].id = 1;
projectTest.users[0].name = "Prestat";
projectTest.users[0].surname = "Dimitri";
projectTest.users[0].login = "dp33";
projectTest.users[0].password = "GL";
var projectTestJSON = JSON.stringify(projectTest);

//We can test the POST with CURL commands like (localhost example) :
//curl --data rl --data "name=Perez&surname=Mathieu&login=mperez&password=mp33" http://localhost:8080/api/users/
//curl --data rl --data "name=Humus&description=TreslongueDescription" http://localhost:8080/api/projects/
//curl -X PUT http://localhost:8080/api/projects/Humus/users/mperez

//Test procedures :
//npm i
//for installing dependencies
//in a terminal
//mongodb --dbpath nodes_modules/data/
// in an other terminal
//node api.js
//You can now access http://localhost:8080/api/* !


//2 Possibilities : From Project add a User or from User add a Projet
//Here from Project add User


//Temporally, in the future, set the config in a json file.

app.set('superSecret', "12345"); // secret variable

//Add a User Service
//Suppose :
// POST : {"name":"foo", "surname":"bar", "login":"user", "password":"pwd"}
// POST : url?name=foo&surname=bar&login=user&password=pwd
    app.post('/api/users', function(req, res) {
        var user = new Object();
        user.name = req.body.name;
        user.surname = req.body.surname;
        user.login = req.body.login;
        user.password = req.body.password;
        console.log(user);

        //Insertion dans la BD
	// Set our internal DB variable
    	var db = req.db;
    	// Set our collection
    	var collection = db.get('userCollection');
 	// Submit to the DB
    	collection.insert({
        	"name" : user.name,
        	"surname" : user.surname,
        	"login" : user.login,
        	"password" : user.password
    	}, function (err, doc) {
        	if (err) {
            	// If it failed, return error
            	res.send("There was a problem adding the information to the database.");
        	}
        	else {
            	// And forward to success page
            	res.redirect("userlist");
        	}
    	});
    });
//Add a Project Service
//Suppose :
// POST : {"name":"foo", "description":"bar"}
// POST : url?name=foo&description=bar
app.post('/api/projects', function(req, res) {
	var project = new Object();
	project.name = req.body.name;
	project.description = req.body.description;

	//Insertion dans la BD
	// Set our internal DB variable
	var db = req.db;

	// Set our collection
	var collection = db.get('projectCollection');
	// Submit to the DB
	collection.insert({
		"name" : project.name,
		"description" : project.description
	}, function (err, doc) {
		if (err) {
	    	// If it failed, return error
	    	res.send("There was a problem adding the information to the database.");
		}
		else {
	    	// And forward to success page
	    	res.redirect("projectlist");
		}
	});
});

//Authentification Service
//Check Login Password
app.get('/api/users/:login/:password', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	var userLogin = req.params.login;
	var userPassword = req.params.password;
	//Check if there is the login / password in the DB.
	// Set our internal DB variable
	var db = req.db;

	// Find in a collection
  	var query = { login: userLogin, password: userPassword};

	db.collection("userCollection").find(query, {}, function(e, docs) {
		if (docs.length != 0) {
			console.log("Il y a bien un utilisateur " + userLogin + " avec le mdp " + userPassword);
			console.log(docs);
            var token = jwt.sign(docs[0], app.get('superSecret'));

            // return the information including token as JSON
            res.json({
                success: true,
                message: 'Authentification succeded!',
                token: token
            });
		}
		else {
            console.log("Il n'y a pas d'utilisateur " + userLogin + " avec le mdp " + userPassword);
            res.json({ success: false, message: 'Authentication failed. Wrong login/password.' });
		}
	});
});

//Get a User Service
//From the Login
app.get('/api/users/:login', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var userLogin = req.params.login;
    //Remplacer userTestJSON par une requête MangoDB qui sélectionne un user selon son login
    var db = req.db;

    // Find in a collection
    var query = { login: userLogin};

    db.collection("userCollection").find(query, {}, function(e, docs) {
        if (docs.length != 0) {
            res.send(docs);
        }
        else {
            res.status(404);
            res.send({ error: 404});
        }
    });
});

//Get a Project Service
//From the Project Name
app.get('/api/projects/:name', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var projectName = req.params.name;
    //Remplacer userTestJSON par une requête MangoDB qui sélectionne un user selon son login
    var db = req.db;

    // Find in a collection
    var query = { name: projectName};

    db.collection("projectCollection").find(query, {}, function(e, docs) {
        if (docs.length != 0) {
            res.send(docs);
        }
        else {
            res.status(404);
            res.send({ error: 404});
        }
    });
});

//Add a Project Service
//Add to the project with the "name" the User with the "login".
//Suppose :
// POST : {"name":"foo", "login":"bar"}
// POST : url?name=foo&login=bar
app.put('/api/projects/:name/users/:login', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var projectName = req.params.name;
    var userLogin = req.params.login;
    //Remplacer userTestJSON par une requête MangoDB qui sélectionne un user selon son login
    var db = req.db;

    var projectQuery = {name : projectName};
    var userQuery = {login : userLogin};


    //Steps :
	//Check if there is the project
	//Check if there is the user
	//Add the user (without its projects list) to the project
	//Add the project (without its users list) to the user
	//Done



    db.collection("projectCollection").find(projectQuery, {}, function(e, docsProject) {
        if (docsProject.length != 0) {

            db.collection("userCollection").find(userQuery, {}, function(e, docsUser) {
                if (docsUser.length != 0) {

                	if (docsProject[0].users  == undefined)
                		docsProject[0].users = [];

                	var user = docsUser[0];
                	if (user.projects != undefined)
                		delete user['projects'];
                	docsProject[0].users.push(user);


                	db.collection("projectCollection").update(projectQuery, docsProject[0], function(err, res) {
                		if (err) throw err;

                        if (docsUser[0].projects  == undefined)
                            docsUser[0].projects = [];

                        var project = docsProject[0];
                        if (project.users != undefined)
                        delete project['users'];
                        docsUser[0].projects.push(project);

                        db.collection("userCollection").update(userQuery, docsUser[0], function(err, res) {
                            if (err) throw err;

                            console.log("document updated");
                        })
					})
                }
                else {
                    res.status(404);
                    res.send({ error: 404});
                }
            });
        }
        else {
            res.status(404);
            res.send({ error: 404});
        }
    });

});

////// Attach application /////

// Catch all other routes and return an application file
app.get(['/', '/:requested'], function(req, res, next) {
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
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

// Get port from environment and store in Express.
var port = process.env.PORT || '8080';
app.set('port', port);

// Create HTTP server.
var server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, function(){
	console.log("API running on localhost:" + port);
});
