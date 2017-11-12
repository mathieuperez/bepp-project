const BASE_URL = 'http://localhost:4200/#/';

describe('Protractor Demo App', function() {
    it('should add one and two', function() {
        browser.get(BASE_URL);
        element(by.cssContainingText('div','Login'));
    });
});
