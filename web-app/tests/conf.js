// To run the tests :
// sudo webdriver-manager start    ** TO START A SELENIUM SERVER: CHROME IS DEFAULT **
// protractor conf.js

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        '1_US1.spec.js',
        '2_US2.spec.js',
        '3_US3.spec.js',
        '4_US4.spec.js',
        '5_US5.spec.js',
        '6_US6.spec.js',
        '7_US7.spec.js',
        '8_US8.spec.js',
        '9_US17.spec.js',
        '10_US18.spec.js',
        '11_US23.spec.js'
    ]
}
