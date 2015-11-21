var webdriver = require('selenium-webdriver'),
	By = require('selenium-webdriver').By,
	until = require('selenium-webdriver').until,
	chrome = require('selenium-webdriver/chrome')
  Key = require('selenium-webdriver').Key;

var locators =
  {
    body : By.tagName('body'),
    restart : By.css('a.restart-button'),
    score: By.css('div.score-container'),
    tile: By.css('div.tile')
  };

var browser = new webdriver
					.Builder()
					.usingServer('http://localhost:9515')
 					.forBrowser('chrome')
 					.build();

browser.get('http://gabrielecirulli.github.io/2048/');

function press(key){
  browser
    .findElement(locators.body)
    .sendKeys(key);
}

function scorePromise(){
  return browser.findElement(locators.score).getText();
}

function tilesPromise(){
  return browser.findElements(locators.tile);
}

function getTilePosition(tile){
  // return tile.FindElement(By.xpath("..")).getAttribute('class');
  return tile.getAttribute('class');
}

setTimeout(function(){
  press(Key.ARROW_UP);
  press(Key.ARROW_DOWN);
  press(Key.ARROW_LEFT);
  press(Key.ARROW_RIGHT);
  scorePromise().then(function(txt){
    console.log(txt);
  });
  browser.sleep(1000).then(function(){
    tilesPromise().then(function(tiles){
      for(var i = 0; i < tiles.length; i++){
          tiles[i].getText().then(function(txt){
            console.log(txt);
          });

          getTilePosition(tiles[i]).then(function(txt){
            console.log(txt);
          })
      }
    });
  });
}, 1000);

setTimeout(function(){
	browser.quit();
}, 10000);
