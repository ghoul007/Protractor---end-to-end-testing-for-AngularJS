/**
 * Created by pramo_000 on 03-05-2016.
 */
describe('Banking App Login', function () {

    var homePage = require('./homePage.js');

    beforeEach(function () {
        console.log('fdefdfsfsd');
        console.log('fdefdfsfsd');
        console.log('fdefdfsfsd');



    });


    it('LoadHome Page Validation', function () {
        browser.get('http://www.example.com/');
        expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');

    });


    it('Select the Drop Down and Login Button Click', function () {

        // var loginButton = element(by.buttonText('Login In'));

        var loginButton = element(by.css('#search-phrase'));
        loginButton.sendKeys('sea');

        var btn = element(by.css('#search-bar__submit'));
        btn.click();
        browser.pause();
        browser.sleep(1000);

        element.all(by.repeater('cust in Customers')).then(function (item) {
            item[2].click();
        });
        browser.sleep(2000);
        element(by.buttonText('Login')).click();


        //  expect(browser.getTitle().toEqual('Protractor practice website - Banking App'));


    });


    it('Verify the Correct User', function () {
        element(by.xpath('/html/body/div[3]/div/div[2]/div/div[1]/strong/span')).getText().then(function (text) {
            console.log('====' + text);
            console.log('====' + text);
            console.log('====' + text);
        });

        element.all(by.model('accountNo')).getText().then(function (item) {
            //  item[3].click();

        })


    });


});




