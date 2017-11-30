
describe('Adding a Userstory to the backlog', function() {
    it('The userstory added successfully', function() {

        browser.get('http://localhost:8080/');

        //Fill the email and password fields and submit
        element(by.name('email')).sendKeys('amine@email.com');
        element(by.name('password')).sendKeys('123');

        element(by.name('login')).click();

        browser.wait(function () {
            return element(by.name('ProjetTest')).isPresent();
        }, 5000);

        //Choose the ProjectTest project
        element(by.name('ProjetTest')).click();

        browser.wait(function () {
            return element(by.name('backlog')).isPresent();
        }, 5000);

        //Choose the project backlog
        element(by.name('backlog')).click();
        browser.sleep(500);

        //Click on Add US button
        element(by.name('newus')).click();
        browser.sleep(5000);

        //Fill the US form
        element(by.name('us')).sendKeys('En tant que ** Je souhaite ***');
        element(by.name('priority')).sendKeys('2');
        element(by.name('difficulty')).sendKeys('1');

        //Add the US
        element(by.name('addus')).click();

        element(by.name('En tant que ** Je souhaite ***')).isPresent();

        //Click to logout
        element(by.name('logout')).click();

    });
});
