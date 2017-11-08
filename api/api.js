var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Add a User Service
//Suppose :
// POST : {"name":"foo", "surname":"bar", "login":"user", "password":"pwd"}
// POST : url?name=foo&surname=bar&login=user&password=pwd
app.post('/api/user/post', function(req, res) {
    var user = new Object();
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.login = req.body.login;
    user.password = req.body.password;
    console.log(user);
    //Insersion dans la BD
});

//Add a Project Service
//Suppose :
// POST : {"name":"foo", "description":"bar"}
// POST : url?name=foo&description=bar
app.post('/api/project/post', function(req, res) {
    var project = new Object();
    project.name = req.body.name;
    project.surname = req.body.description;
    console.log(project);
    //Insersion dans la BD
});

//Get a User Service
//From the Login
app.get('/api/user/get/:login', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var login = req.params.login;
    //Remplacer userTestJSON par une requête MangoDB qui sélectionne un user selon son login

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

    res.send(userTestJSON);
});

//Get a Project Service
//From the Project Name
app.get('/api/project/get/:name', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var name = req.params.name;
    //Remplacer projectTestJSON par une requête MangoDB qui sélectionne un project selon son name

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

    res.send(projectTestJSON);
});

app.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('Page introuvable !');
});

app.listen(8080);
