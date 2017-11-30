import {browser, by, element} from "protractor";

describe('Adding a memeber to a project', function() {
    it('The user added successfuly a member to a project list members', function() {

        browser.get('http://localhost:8080/');

        //Hit sign up button
        element(by.name('signup')).click();

        browser.wait(function() {
            return element(by.name('createaccount')).isPresent();
        }, 5000);

        //Fill the sign up form and submit it
        element(by.name('name')).sendKeys('Avfmine');
        element(by.name('surname')).sendKeys('Anmn');
        element(by.name('email')).sendKeys('med@email.com');
        element(by.name('password1')).sendKeys('123');
        element(by.name('password2')).sendKeys('123');

        element(by.name('createaccount')).click();

        //Click to logout
        element(by.name('logout')).click();

        //Fill the email and password fields and submit
        element(by.name('email')).sendKeys('amine@email.com');
        element(by.name('password')).sendKeys('123');

        element(by.name('login')).click();

        browser.wait(function() {
            return element(by.name('TestProject')).isPresent();
        }, 5000);

        //Choose the ProjectTest project
        element(by.name('TestProject')).click();

        browser.wait(function() {
            return element(by.name('vueensemble')).isPresent();
        }, 5000);

        //Choose the project overview
        element(by.name('vueensemble')).click();
        browser.sleep(500);

        //Click on Add member button
        element(by.name('newmember')).click();
        browser.sleep(500);

        //Add the user email and select a task and submit
        element(by.id('addedUserLogin')).sendKeys('amine@email.com');

        element.all(by.id('addedUserRole')).each(function (eachElement, index)
        {
            eachElement.click();
            browser.driver.sleep(500);
            element(by.id('addedUserRole')).click();
            browser.driver.sleep(500);
        });

        element(by.name('addmember')).click();

        browser.sleep(500);

        //Add a userstory
        browser.wait(function () {
            return element(by.name('backlog')).isPresent();
        }, 5000);

        //Choose the project backlog
        element(by.name('backlog')).click();
        browser.sleep(500);

        //Click on Add US button
        element(by.name('newus')).click();
        browser.sleep(500);

        element(by.id('us')).sendKeys('En tant que ** Je souhaite ***');
        element(by.id('priority')).sendKeys('2');
        element(by.id('difficulty')).sendKeys('1');

        element(by.name('addus')).click();



        //Click to logout
        element(by.name('logout')).click();
    });
});

