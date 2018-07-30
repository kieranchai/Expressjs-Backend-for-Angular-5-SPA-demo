var path          = require('path');
var express       = require ('express');
var bodyParser    = require('body-parser');
var foodcourtCtrl  = require('./api/foodcourt/foodcourt.controller');

var app  = express();
var cors = require('cors');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")));

app.use(cors());

app.get ("/api/foodcourt",  foodcourtCtrl.list);
// app.get ("/api/category/:cat_id/furniture",  furnitureCtrl.list);

// Catch all
app.use(function (req, resp) {
    resp.status(404);
    resp.send("Error File not Found");
});

// set port and start webserver
app.listen('3000', function () {
    console.log("Server running at http://localhost:3000");
});
