var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');
var bodyParser = require('body-parser');


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'madhav',
	//password: '',
	database: 'viking_scout'
});

var currentMatch = 1;


app.get('/', function(req, res){
	res.render('index');
});

app.get('/schedule', function(req, res){
	connection.query('SELECT * FROM `schedule`', function(err, rows, fields){
		if (err) throw err;
		res.render('schedule', {rows: rows, fields: fields});
	});
});

app.get('/teamView', function(req, res){
	var teamNumber = req.query.team
	res.render('teamView', {team: teamNumber});
});

app.get('/scout', function(req, res) {
	res.render('scout');
})

app.post('/scout', function(req,res) {
	//console.log(req.body);

	var query = "INSERT INTO `data` (`teamNumber`, `matchNumber`, `alliance`, `autoTotes`, `score`, `autoTrash`, `highestToteStack`, `highestToteSpeed`, `coop`, `moveForward`, `totePickupGround`, `totePickupUpside`, `totePickupChute`, `totePickupLandfill`, `RCPickupUp`, `RCPickupSide`, `RCPickupCentre`, `otherStack`, `highestToteRC`, `highestTotePN`, `humanNoodle`, `humanThrow`, `coopOtherStack`, `goodStacks`, `badStacks`) VALUES ('"+ req.body.teamNumber + "', '"+req.body.matchNumber+"', '"+ req.body.alliance+"', '"+req.body.autoTotes+"', '"+req.body.matchScore+"', '"+req.body.autoTrash+"', '"+req.body.highestToteStack+"', '"+req.body.highestToteSpeed+"', '"+req.body.coop+"', '"+req.body.moveForward+"', '"+req.body.totePickupGround+"', '"+req.body.totePickupUpside+"', '"+req.body.totePickupChute+"', '"+req.body.totePickupLandfill+"', '"+req.body.RCPickupUp+"', '"+req.body.RCPickupSide+"', '"+req.body.RCPickupCentre+"', '"+req.body.otherStack+"', '"+req.body.highestToteRC+"', '"+req.body.highestTotePN+"', '"+req.body.humanNoodle+"', '"+req.body.humanThrow+"', '"+req.body.coopOtherStack+"', '"+req.body.goodStacks+"', '"+req.body.badStacks+"')";
	
	//console.log(query);
	connection.query(query);


})




http.listen(3000, function(){
	console.log('listening on *:3000');
});