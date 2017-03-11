var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.get("/api/friends", function(req, res){
	
	var friend = req.params.friends;

  	return res.json(friends);

});

app.post("/api/friends", function(req, res){
	
	
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});