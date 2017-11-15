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

function verifyAuthentification(req, res)
{
    var result = new Object();
    //result.status = {}
    var token = req.body.token;
    var db = req.db;
    var collection = db.get('userCollection');
    var query = {token : token};
    collection.find(query, {}, function(e, docs) {
        if (docs.length != 0) {
            console.log("Le token a trouvé correspondance.");

        }
        else {
            console.log("Le token n'a pas trouvé correspondance.");
        }
    });
    return result;
}



//We can test the POST with CURL commands like (localhost example) :
//curl --data rl --data "name=Perez&surname=Mathieu&login=mperez&password=mp33" http://localhost:8080/api/users/
//curl --data rl --data "name=Humus&description=TreslongueDescription&login=mperez" http://localhost:8080/api/projects/
//curl -X PUT http://localhost:8080/api/projects/Humus/users/mperez

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

//Add a User Service
//Suppose :
// POST : {"name":"foo", "surname":"bar", "login":"user", "password":"pwd"}
// POST : url?name=foo&surname=bar&login=user&password=pwd
    app.post('/api/users', function(req, res) {
        var name = req.body.name;
        var surname = req.body.surname;
        var login = req.body.login;
        var password = req.body.password;


    	var db = req.db;
    	var collection = db.get('userCollection');

    	//Check if login already exists
    	collection.find({name : name}, {}, function(err, doc) {
    	    if (err) {
                res.send("There was a problem with the database while checking if the login already exists.");
            }
            else {
                if (doc.length == 0) {
                    collection.insert({
                        "name" : name,
                        "surname" : surname,
                        "login" : login,
                        "password" : password
                    }, function (err, doc) {
                        if (err) {
                            res.send("There was a problem with the database while adding the user.");
                        }
                        else {
                            res.redirect("userlist");
                        }
                    });
                }
                else {
                    res.send("There is already a user with this login.");
                }
            }
        })
    });


//Add a Project Service
//Suppose :
// POST : {"name":"foo", "description":"bar", "token":"token"}
// POST : url?name=foo&description=bar
app.post('/api/projects', function(req, res) {
	var name = req.body.name;
	var description = req.body.description;
    var token = req.body.token;

    var db = req.db;
    var userCollection = db.get('userCollection');
    var projectCollection = db.get('projectCollection')

    var userQuery = {token : token};
    var projectQuery = {name : name};

    userCollection.find(userQuery, {}, function(e, docUser) {
        if (docUser.length != 0) {
            //Is the project name available
            projectCollection.find(projectQuery, {}, function(e, docProject) {
                if (e) {
                    res.send("There was a problem with the database while checking if the project already exists.");
                }
                else {
                    if (docProject.length == 0) {
                        //Creation of the project
                        projectCollection.insert({
                            "name" : name,
                            "description" : description
                        }, function (err, doc) {
                            if (err) {
                                res.send("There was a problem with the database while creating the project.");
                            }
                            else {
                                //Add the project to the user's list
                                var updateProject={$addToSet: {users: docUser[0].login}};
                                projectCollection.update(projectQuery, updateProject, {upsert: true}, function (err, doc) {
                                    if (err) {
                                        res.send("There was a problem with the database while creating the project: adding the user to the project's user list.");
                                    }
                                    else{
                                        res.redirect("projectlist");
                                    }});

                                //Add the user to the project's list
                                var updateUser={$addToSet: {projects: name}};
                                userCollection.update(userQuery, updateUser, {upsert: true}, function (err, doc) {
                                    if (err) {
                                        res.send("There was a problem with the database while creating the project: adding the project to the user's project list.");
                                    }
                                    else{
                                        //res.redirect("projectlist");
                                    }});
                            }
                        });
                    }
                    else {
                        res.send("There is already a project with this name.");
                    }
                }
            });
        }
        else {
            res.send("You must be logged in.");
        }
    });
});


//Authentification Service
//Check Login Password
//Check Login Password
app.get('/api/users/:login/:password', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	var userLogin = req.params.login;
	var userPassword = req.params.password;

    //Compléter le service REST qui vérifie que la BD contient bien le login et le password d'un utilisateur(connexion d'un utilisateur US1)
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

            var query = {login: userLogin};
            db.collection('userCollection').update(query, { $set: {token: token}}, {upsert: true}, function (err, doc) {
                if (err) {
                    // If it failed, return error
                    //res.send("There was a problem with the database while adding the token.");
                }
                else{
                    //res.redirect("projectlist");
                }});

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
    //Remplacer userTestJSON par une requête MangoDB qui sélectionne un projet selon son nom
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


                    collection.update(query, updateUser, {upsert: true}, function (err, doc) {
                        if (err) {
                            // If it failed, return error
                            res.send("There was a problem with the database while creating the project: adding the project to the user's project list.");
                        }
                        else{
                            //res.redirect("projectlist");
                        }});


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
