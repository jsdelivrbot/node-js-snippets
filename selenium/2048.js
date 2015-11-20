var webdriver = require('selenium-webdriver'),
	By = require('selenium-webdriver').By,
	until = require('selenium-webdriver').until,
	chrome = require('selenium-webdriver/chrome')
  Key = require('selenium-webdriver').Key;

var locators =
  {
    body : By.tagName('body'),
    restart : By.css('a.restart-button'),
    score: By.css('div.score-container')
  };

var browser = new webdriver
					.Builder()
 					.forBrowser('chrome')
 					.build();

browser.get('http://gabrielecirulli.github.io/2048/');

function press(key){
  browser
    .findElement(locators.body)
    .sendKeys(key);
}

function getScore(){
  return browser.findElement(locators.score).getText();
}

setTimeout(function(){
  press(Key.ARROW_UP);
  press(Key.ARROW_DOWN);
  press(Key.ARROW_LEFT);
  press(Key.ARROW_RIGHT);
  getScore().then(function(txt){
    console.log(txt);
  });
}, 1000);

setTimeout(function(){
	browser.quit();
}, 10000);
