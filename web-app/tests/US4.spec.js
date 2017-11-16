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

        element(by.id('ProjetTest')).click();

        browser.wait(function() {
            return element(by.name('vueensemble')).isPresent();
        }, 5000);

        element(by.name('vueensemble')).click();
        browser.sleep(5000);

        element(by.name('newmember')).click();
        browser.sleep(5000);

        element.all(by.name('Developpeur')).each(function (eachElement, index)
        {
            eachElement.click();
            browser.driver.sleep(500);
            element(by.id('optionDev')).click();
            browser.driver.sleep(500);
        });

        browser.sleep(1000);

        element.all(by.name('Role')).each(function (eachElement, index)
        {
            eachElement.click();
            browser.driver.sleep(500);
            element(by.id('optionTask')).click();
            browser.driver.sleep(500);
        });

        element(by.name('addmember')).click();

        browser.sleep(5000);

    });
});
