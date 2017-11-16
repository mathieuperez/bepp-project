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
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });


    /*
    describe("POST Créer un projet", function() {
        var localurl = url + "projects/";

        it("returns status 200", function(done) {

            request.post({
                headers: {'content-type' : 'application/x-www-form-urlencoded'},
                url:     url + "users/token",
                form:    { login: "dprestat", password: "dp33"}
            }, function(error, response, body) {
                console.log(response.status);
                request.post({
                    headers: {'x-access-token' : body.token},
                    url:     localurl,
                    form:    { name: "Bepp", description: "Notre projet"}
                }, function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
            });
        });
    });
    */
    describe("GET Obtenir un utilisateur", function() {

    });

    describe("GET Obtenir un projet", function() {

    });
});