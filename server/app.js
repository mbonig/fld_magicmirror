'use strict';

var express = require('express');
var app = express();
var fs = require('fs');
var readline = require('readline');

var Client = require('node-rest-client').Client;

var client = new Client();


app.get('/weather', function (req, res) {
    var weatherUrl = 'https://api.forecast.io/forecast/80c85f5e52ee7be7ec1761b51904cd32/39.613319,-105.016647';
    client.get(weatherUrl, function (data, response) {
        res.send(data);
    });
});

app.get('/votd', function (req, res) {
    res.send({});
    return;
    var votdUrl = 'http://labs.bible.org/api/?passage=votd&type=json';
    client.get(votdUrl, function (data, response) {
        res.send(data);
    });
});

app.use(express.static('newclient/src'));

app.listen(3000, function () {
    console.log('Server listening on port 3000');
});
