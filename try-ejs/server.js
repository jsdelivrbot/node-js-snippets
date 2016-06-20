var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {
        title: 'EJS & Express',
        data: [1,2,3,4,5]
    });
});


app.listen(3000);
console.log('listening at port 3000');