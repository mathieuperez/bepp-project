import {browser, by, element} from "protractor";

describe('Creating a project', function() {

    it("The user created a project and he's redirected to this project overview", function() {

        browser.get('http://localhost:8080/');

        //Fill the email and password fields and submit
        element(by.name('email')).sendKeys('amine@email.com');
        element(by.name('password')).sendKeys('123');

        element(by.name('login')).click();

        //Waiting form to appear
        browser.wait(function() {
            return element(by.name('newproject')).isPresent();
        }, 3000);

        element(by.name('newproject')).click();

        browser.wait(function() {
            return element(by.name('addproject')).isPresent();
        }, 3000);

        // Fill the project info form
        element(by.name('project-name')).sendKeys('TestProject');
        element(by.name('datedebut')).sendKeys('17112017');
        element(by.name('nbSprints')).sendKeys('3');
        element(by.name('nbDurationSprint')).sendKeys('2');
        element(by.name('description')).sendKeys('This is a test project');

        element(by.name('addproject')).click();

        //Expect to go the project overview page
        expect(browser.getCurrentUrl()).toEqual("http://localhost:8080/#/dashboard/projects/TestProject/overview");

        //Click to logout
        element(by.name('logout')).click();

    });
});