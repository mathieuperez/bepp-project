import {browser, by, element} from "protractor";

describe('Verifiying a project existance', function() {

    it("The last created project exists in the projects left bar", function() {

        //Go to login page
        browser.get('http://localhost:8080/');

        //Fill the email and password fields
        element(by.name('email')).sendKeys('amine@email.com');
        element(by.name('password')).sendKeys('123');

        //Click on login
        element(by.name('login')).click();

        //Choose the last created project
        element(by.name('TestProject')).click();

        browser.sleep(3000);

        //Expect to get the created project overview page
        expect(browser.getCurrentUrl()).toEqual("http://localhost:8080/#/dashboard/projects/TestProject/overview");

        browser.sleep(500);

        //Click to logout
        element(by.name('logout')).click();

    });
});
