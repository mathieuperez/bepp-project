import {browser, by, element} from "protractor";

describe('Modifiying and deleting a userstory', function() {
    it('The userstory is successfully modified and deleted', function() {

        browser.get('http://localhost:8080/');

        //Fill the email and password fields and submit
        element(by.name('email')).sendKeys('amine@email.com');
        element(by.name('password')).sendKeys('123');

        element(by.name('login')).click();

        browser.wait(function () {
            return element(by.name('TestProject')).isPresent();
        }, 5000);

        //Choose the ProjectTest project
        element(by.name('TestProject')).click();

        browser.wait(function () {
            return element(by.name('backlog')).isPresent();
        }, 5000);

        //Choose the project backlog
        element(by.name('backlog')).click();
        browser.sleep(500);

        browser.wait(function () {
            return element(by.name('En tant que ** Je souhaite ***')).isPresent();
        }, 5000);

        //Click on Modify US button
        element(by.name('modifyus')).click();
        browser.sleep(500);

        element(by.id('modifydescription')).sendKeys('Description modification !!!');
        element(by.id('modifydifficulty')).sendKeys('5');

        var priorityinput = element(by.id('modifypriority'));
        expect(priorityinput.isEnabled()).toBe([true]);

        //Click on Validate modifications button
        element(by.name('validatemodifs')).click();

        //Click on deleting button
        element(by.name('deleteus')).click();

        //Click to logout
        element(by.name('logout')).click();

    });
});


