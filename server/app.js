var path          = require('path');
var express       = require ('express');
var bodyParser    = require('body-parser');
var foodcourtCtrl  = require('./api/foodcourt/foodcourt.controller');
var foodcourtstallCtrl = require('./api/foodcourtstall/foodcourtstall.controller');
var foodcourtdishCtrl = require('./api/foodcourtdish/foodcourtdish.controller');
var feedbackCtrl = require('./api/feedback/feedback.controller');
var newsCtrl = require('./api/newsupdate/newsupdate.controller');
var userCtrl = require('./api/user/user.controller');
var app  = express();
var cors = require('cors');

// HTTPS configuration
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/cert.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")));

app.use(cors());

app.get("/api/news", newsCtrl.list);
app.get ("/api/foodcourt",  foodcourtCtrl.list);
app.get ("/api/foodcourt/:fc_id/foodcourtstall",  foodcourtstallCtrl.list);
app.get ("/api/foodcourt/:fc_id/foodcourtstall/:stall_id/foodcourtstalldishes", foodcourtdishCtrl.list);
app.get ("/api/feedback",  feedbackCtrl.list);
app.post("/api/feedback", feedbackCtrl.create);
app.get ("/api/user",  userCtrl.list);
app.post('/api/user', userCtrl.create);
// Catch all redirect to home page
app.use(function (req, resp) {
    resp.redirect('/');
});


// // set port and start webserver
// app.listen('3000', function () {
//     console.log("Server running at http://localhost:3000");
// });


// Configured for HTTPS, default to https://localhost:3000
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(3000);
