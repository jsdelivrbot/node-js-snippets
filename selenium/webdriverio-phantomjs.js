var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'phantomjs'
    }
};
 
webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .title(function(err, res) {
        console.log('Title was: ' + res.value);
    })
    .end();