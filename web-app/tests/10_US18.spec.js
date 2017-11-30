

describe('Creating a project sprints', function() {

    it("The user created a project, specified the sprints duration and dates and he's redirected to the sprints menu", function() {

        browser.get('http://localhost:8080/');

        //Fill the email and password fields and submit
        element(by.name('email')).sendKeys('amine@email.com');
        element(by.name('password')).sendKeys('123');

        element(by.name('login')).click();

        element(by.name('ProjectTest2')).click();

        //Go to sprints menu
        element(by.name('sprints')).click();
        browser.sleep(3000);

        //Click to logout
        element(by.name('logout')).click();

    });
});
