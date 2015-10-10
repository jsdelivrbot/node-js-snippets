"use strict";

var webdriver = require('selenium-webdriver'),
	By = require('selenium-webdriver').By,
	until = require('selenium-webdriver').until,
	chrome = require('selenium-webdriver/chrome');

var browser = new webdriver
					.Builder()
					//.withCapabilities(webdriver.Capabilities.chrome())
 					.forBrowser('chrome')
 					.build();
										
browser.get('https://www.google.com');
 browser
 	.findElement(By.name('q'))
 	.sendKeys('tachyus');
 browser.findElement(By.name('btnG')).click();

setTimeout(function(){
	browser.quit();	
}, 3000);

