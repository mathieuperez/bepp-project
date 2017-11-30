describe('Adding a US to Sprints mini backlog by selecting it from the global Backlog', function() {

    it("The selected US is successfully added to the Mini Backlog of the sprint", function() {

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

        element(by.name('ProjectTest2')).click();

        //Go to sprints menu
        element(by.name('sprints')).click();
        browser.sleep(3000);

        // Add a new US to the sprint
        element(by.name('newustosprint')).click();
        browser.sleep(3000);

        element(by.name('selectus')).click();
        browser.sleep(3000);

        // Validate added us
        element(by.name('addustosprint')).click();
        browser.sleep(3000);

        //Click to logout
        element(by.name('logout')).click();

    });
});
