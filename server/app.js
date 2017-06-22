var express = require('express');

var app = new express();

app.use(express.static('public'));
app.use('/assets', express.static('assets'));


app.listen(3000, () => {
    console.log('App start at :3000');
})
