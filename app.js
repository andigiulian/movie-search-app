var express = require('express');
var app = express();
var request = require('request');

app.set('view engine', 'ejs');

app.get('/results', function(req, res){
	request('http://www.omdbapi.com/?apikey=thewdb&s=alabama', function(error, response, body){
		if(!error && response.statusCode == 200){
			var parsedData = JSON.parse(body);
			res.render('results', {data: parsedData});
		}
	});
});

app.listen(3000, function(){
	console.log('SERVER RUNNING');
});