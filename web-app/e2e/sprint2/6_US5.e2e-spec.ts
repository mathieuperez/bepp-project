// import {browser, by, element} from "protractor";
//
// describe('Adding a Userstory to the backlog', function() {
//     it('The userstory added successfully', function() {
//
//         browser.get('http://localhost:8080/');
//
//         //Fill the email and password fields and submit
//         element(by.name('email')).sendKeys('amine@email.com');
//         element(by.name('password')).sendKeys('123');
//
//         element(by.name('login')).click();
//
//         browser.wait(function () {
//             return element(by.name('TestProject')).isPresent();
//         }, 5000);
//
//         //Choose the ProjectTest project
//         element(by.name('TestProject')).click();
//
//         browser.wait(function () {
//             return element(by.name('backlog')).isPresent();
//         }, 5000);
//
//         //Choose the project backlog
//         element(by.name('backlog')).click();
//         browser.sleep(500);
//
//         //Click on Add US button
//         element(by.name('newus')).click();
//         browser.sleep(500);
//
//         element(by.id('us')).sendKeys('En tant que ** Je souhaite ***');
//         element(by.id('priority')).sendKeys('2');
//         element(by.id('difficulty')).sendKeys('1');
//
//         element(by.name('addus')).click();
//
//       //  element(by.name('En tant que ** Je souhaite ***')).isPresent();
//
//     });
// });
//
//
