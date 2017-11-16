exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'login_logout.spec.js',
        'US1.spec.js'
    ]
}
