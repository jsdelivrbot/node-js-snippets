var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By;

test.describe('Google Search', function() {
  this.timeout(7000);
  test.it('should work', function(done) {
    var browser = new webdriver
      .Builder()
      .withCapabilities(webdriver.Capabilities.phantomjs())
      .build();

    browser.get('http://www.google.com');
    browser.getCurrentUrl().then(function(url){ console.log(url);});
    browser
	   .getTitle()
	   .then(function(title){
		    console.log(title);    
        //done();    
	   });
     
     browser
      .findElement(By.name('q'))
 	    .sendKeys('tachyus');
     
     browser.findElement(By.name('btnG')).click();

     setTimeout(function(){
	     browser.quit();
       done();	
     }, 5000);
  });
});

describe("a test", function(){
  var foo = false;

  beforeEach(function(done){

    // simulate async call w/ setTimeout
    setTimeout(function(){
      foo = true;
      done();
    }, 50);

  });

  it("should pass", function(){
    assert.equal(foo, true);
  });

});