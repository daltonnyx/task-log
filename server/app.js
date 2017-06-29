var express = require('express');

var app = new express();

app.use(express.static('public'));
app.use('/assets', express.static('assets'));

var port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('App start at :3000');
})
