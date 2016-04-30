var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//listener
app.listen(PORT, function(){
	console.log('app is listening on port ' + PORT);
})
//routes
app.get('/', function(req, res){
	res.sendFile(process.cwd()+'/index.html');
})
app.get('/reserve', function(req, res){
	res.sendFile(process.cwd()+'/reserve.html');
})
app.get('/tables', function(req, res){
	res.sendFile(process.cwd()+'/tables.html');
})