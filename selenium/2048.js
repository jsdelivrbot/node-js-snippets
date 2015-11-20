var webdriver = require('selenium-webdriver'),
	By = require('selenium-webdriver').By,
	until = require('selenium-webdriver').until,
	chrome = require('selenium-webdriver/chrome');

var browser = new webdriver
					.Builder()
 					.forBrowser('chrome')
 					.build();

browser.get('http://gabrielecirulli.github.io/2048/');

setTimeout(function(){
	browser.quit();
}, 10000);
