// Test for US4

describe('Adding a memeber to a project', function() {
    it('This test should success if the user added successfuly a member to a project list members', function() {

        browser.get('http://localhost:8080/');

        //Fill the email and password fields and submit
        element(by.name('email')).sendKeys('Amine@email.com');
        element(by.name('password')).sendKeys('123');

        element(by.name('login')).click();

        browser.wait(function() {
            return element(by.name('ProjetTest')).isPresent();
        }, 5000);

        //Choose the ProjectTest project
        element(by.name('ProjetTest')).click();

        browser.wait(function() {
            return element(by.name('vueensemble')).isPresent();
        }, 5000);

        //Choose the project overview
        element(by.name('vueensemble')).click();
        browser.sleep(5000);

        //Click on Add member button
        element(by.name('newmember')).click();
        browser.sleep(5000);

        //Add the user email and select a task and submit
        element(by.id('addedUserLogin')).sendKeys('Amine@email.com');

        browser.sleep(1000);

        element.all(by.id('addedUserRole')).each(function (eachElement, index)
        {
            eachElement.click();
            browser.driver.sleep(500);
            element(by.id('OptionDev')).click();
            browser.driver.sleep(500);
        });

        element(by.name('addmember')).click();

        browser.sleep(500);

        //Click to logout
        element(by.name('logout')).click();

    });
});
