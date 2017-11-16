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

        //Select the created test project
        element(by.id('ProjetTest')).click();

        browser.wait(function() {
            return element(by.name('vueensemble')).isPresent();
        }, 5000);

        //Select project info tab
        element(by.name('vueensemble')).click();
        browser.sleep(5000);

        //Verify the added user


        browser.sleep(5000);

    });
});
