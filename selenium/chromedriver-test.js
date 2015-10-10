"use strict";

var webdriver = require('selenium-webdriver'),
	By = require('selenium-webdriver').By,
	until = require('selenium-webdriver').until,
	chrome = require('selenium-webdriver/chrome');

var browser = new webdriver
					.Builder()
					//.usingServer('http://127.0.0.1:4444/wd/hub')
					//.withCapabilities(webdriver.Capabilities.chrome())
 					.forBrowser('chrome')
 					.build();
										
browser.get('https://www.google.com');
browser.getTitle().then(function(title){
	console.log(title);
});
browser
 	.findElement(By.name('q'))
 	.sendKeys('tachyus');
 browser.findElement(By.name('btnG')).click();

setTimeout(function(){
	browser.quit();	
}, 3000);


