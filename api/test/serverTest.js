var expect  = require("chai").expect;
var request = require("request");

describe("Scrum Management API", function() {

    var url = "http://localhost:8080/api/";

    describe("POST Créer un utilisateur", function() {
        var localurl = url + "users/";

        it("returns status 200", function(done) {
            request.post({
                headers: {'content-type' : 'application/x-www-form-urlencoded'},
                url:     localurl,
                form:    { login: "dprestat", password: "dp33", name: "Prestat", surname: "Dimitri"}
            }, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe("POST Authentification", function() {
        var localurl = url + "users/token";

        it("returns status 200", function(done) {
            request.post({
                headers: {'content-type' : 'application/x-www-form-urlencoded'},
                url:     localurl,
                form:    { login: "dprestat", password: "dp33"}
            }, function(error, response, body) {
                console.log("Post Auth : ");
                console.log(body);
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });



    describe("POST Créer un projet", function() {
        var localurl = url + "projects/";
        var authurl = url + "users/token";

        it("returns status 200", function(done) {
            request.post({
                headers: {'content-type' : 'application/x-www-form-urlencoded'},
                url:     authurl,
                form:    { login: "dprestat", password: "dp33"}
            }, function(error, response, body) {
                var bodyJson = JSON.parse(body);
                //done();
                request.post({
                    headers: {'x-access-token' : bodyJson.token},
                    url:     localurl,
                    form:    { name: "Bepp", description: "Notre projet"}
                }, function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    done();
                });

            });
        });
    });

    describe("GET Obtenir un utilisateur", function() {

    });

    describe("GET Obtenir un projet", function() {

    });
});