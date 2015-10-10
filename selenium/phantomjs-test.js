"use strict";

var webdriver = require('selenium-webdriver'),
	By = require('selenium-webdriver').By,
	until = require('selenium-webdriver').until,
	phantomjs = require('selenium-webdriver/phantomjs');


var capabilities = webdriver.Capabilities.phantomjs();
// https://github.com/angular/protractor/issues/150
capabilities.set('phantomjs.cli.args',  ['--ignore-ssl-errors=true',  '--web-security=false']);

var browser = new webdriver
					.Builder()
					//.usingServer('http://127.0.0.1:4444/wd/hub')
					.withCapabilities(capabilities)
 					//.forBrowser('phantomjs')
 					.build();
										
// phantomjs and https
// http://stackoverflow.com/questions/12021578/phantomjs-failing-to-open-https-site										
browser.get('https://www.google.com')
	.then(function(){
		browser.getTitle().then(function(title){
			console.log(title);
		});		
	});

// need to delay for phantomjs
setTimeout(function(){
	browser
		.findElement(By.name('q'))
		.sendKeys('tachyus');
	browser.findElement(By.name('btnG')).click();	
}, 3000);

setTimeout(function(){
	browser.quit();	
}, 5000);

