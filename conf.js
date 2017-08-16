/**
 * Created by pramo_000 on 03-05-2016.
 */
exports.config = {

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: ['maintest.js'],
   /* multiCapabilities: [{
        'browserName': 'firefox'
    }, {
        'browserName': 'chrome'
    }]*/
    multiCapabilities: [
        {
        'browserName': 'chrome'
    }],

    onPrepare : function () {

        browser.driver.manage().window().maximize();
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

    }



};
