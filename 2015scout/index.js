var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

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





http.listen(3000, function(){
	console.log('listening on *:3000');
});