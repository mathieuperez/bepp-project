// Test for US1

describe('Creating a user account', function() {

    it('The test should be successful if the user is created and redirected to the dashboard', function() {

        browser.get('http://localhost:8080/');

        element(by.name('signup')).click();

        browser.wait(function() {
            return element(by.name('createaccount')).isPresent();
        }, 5000);

        element(by.name('name')).sendKeys('Med');
        element(by.name('surname')).sendKeys('Amn');
        element(by.name('email')).sendKeys('test@email.com');
        element(by.name('password1')).sendKeys('123');
        element(by.name('password2')).sendKeys('123');

        element(by.name('createaccount')).click();

        browser.sleep(1000);

        expect(browser.getCurrentUrl()).toEqual("http://localhost:8080/#/dashboard");

    });
});
