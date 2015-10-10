var webdriverio = require('webdriverio');
var assert = require('assert');
var test = require('selenium-webdriver/testing');

var getBrowser = function(browser){
    return webdriverio.remote({
        
    })  
};

var chromeOptions = {
        desiredCapabilities: {
            browserName: 'chrome'
        }
    };
    
var chrome = webdriverio.remote(chromeOptions);

var phantom = webdriverio.remote({
    desiredCapabilities: {
        browserName: 'phantomjs'
    }}).init();
    
var url = 'http://google.com';

test.describe('test chrome', function(){
    this.timeout(5000);
    test.it('title', function(done){
        webdriverio
            .remote(chromeOptions)
            .init()
            .url(url)
            .title(function(err, res) {
                console.log('Title was: ' + res.value);
                done();
            })
            .end();
    });
});

test.describe('test phantomjs', function(){
    this.timeout(5000);
    test.it('title', function(done){
        phantom
            .url(url)
            .title(function(err, res) {
                console.log('Title was: ' + res.value);
                done();
            })
            .end();
    });
});
