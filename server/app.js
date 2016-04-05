'use strict';

var express = require('express');
var app = express();
var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');

var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'calendar-nodejs-quickstart.json';


var Client = require('node-rest-client').Client;

var client = new Client();


app.get('/weather', function (req, res) {
    var weatherUrl = 'https://api.forecast.io/forecast/80c85f5e52ee7be7ec1761b51904cd32/39.613319,-105.016647';
    client.get(weatherUrl, function (data, response) {
        res.send(data);
    });
});

app.get('/votd', function (req, res) {

    res.send({
        success: {total: 1},
        contents: {
            verse: "Because Manasseh king of Judah has done these abominations, and has done wickedly above all that the Amorites did, which were before him, and has made Judah also to sin with his idols:",
            number: "11",
            chapter: "21",
            book: "2 Kings",
            testament: "Old Testament",
            bookid: "12",
            uuid: "0cEJikPnOy_jKYgWzvowMAeF"
        }
    });
    /*    var votdUrl = 'http://quotes.rest/bible/vod.json';
     client.get(votdUrl, function (data, response) {
     res.send(data);
     });*/
});

app.get('/calendar', function (req, res) {

    fs.readFile('client_secret.json', function processClientSecrets(err, content) {
        if (err) {
            console.log('Error loading client secret file: ' + err);
            return;
        }
        // Authorize a client with the loaded credentials, then call the
        // Google Calendar API.
        var credentials = JSON.parse(content);
        var clientSecret = credentials.installed.client_secret;
        var clientId = credentials.installed.client_id;
        var redirectUrl = credentials.installed.redirect_uris[0];
        var auth = new googleAuth();
        var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
        fs.readFile(TOKEN_PATH, function (err, token) {
            if (err) {
                res.status(500).send("Please authorize using calendar.authorize.js first...");
            } else {
                oauth2Client.credentials = JSON.parse(token);
                listEvents(oauth2Client, res);
            }

        });


    });


});

function listEvents(auth, res) {
    var calendar = google.calendar('v3');
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    calendar.events.list({
        auth: auth,
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        timeMax: (tomorrow).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime'
    }, function (err, response) {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }
        var events = response.items;

        res.json(events);
    });
}


app.use(express.static('client'));

app.listen(3000, function () {
    console.log('Server listening on port 3000');
});