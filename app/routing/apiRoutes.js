var friendData = require("../data/friends");

module.exports = function(app){
	app.get("/api/friends", function(req, res){

  		return res.json(friendData);
	});

	app.post("/api/friends", function(req, res){
		res.json(friendData);
		var scores = [];

		var newFriend = req.body;
		var newData = JSON.parse(newFriend);
		var newScores = newData.scores;

		for (var i = 0; i < friendData.length; i++) {
			scores.push(friendData[i].scores);
		}
		
		var results = [];
		var totals = [];
		
		for(var i = 0; i < newScores.length; i++) {
  			results.push(Math.abs(newScores[i] - scores[0][i]));
		}
			console.log(results);

		var totalDifference = results.reduce(function(acc, val) {
		  return acc + val;
		}, 0);

		console.log(totalDifference);

	});
}