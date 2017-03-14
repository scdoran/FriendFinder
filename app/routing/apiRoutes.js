var friendData = require("../data/friends");

module.exports = function(app){
	app.get("/api/friends", function(req, res){

  		return res.json(friendData);
	});

	app.post("/api/friends", function(req, res){
		
		var scores = [];
		var results = [];
		var totalDifference = 0;
		var bestMatch;
		
		res.json(friendData);
		var newFriend = req.body;
		var newData = JSON.parse(newFriend);
		var newScores = newData.scores;

		console.log(newScores);


		for (var i = 0; i < friendData.length; i++) {
			scores.push(friendData[i].scores);
		}
		
		scores.forEach( function(element, index) {
			
			for(var i = 0; i < newScores.length; i++) {
	  			
	  			var difference = Math.abs(newScores[i] - element[i]);
	  			totalDifference += difference;
	  		}
	  		
	  		results.push(totalDifference);
	  		totalDifference = 0;

		});

		Array.min = function( array ) {
			return Math.min.apply(Math, array);
		};
		var lowest = Array.min(results);
		var index = results.indexOf(lowest);
		
		bestMatch = friendData[index];
		console.log(bestMatch.name);
		// function bestMatch(){
		// 	$("#characterName").append(bestMatch.name);
		// 	var div = $("<div>");
		// 	var h2 = $("<h2>You are " + bestMatch.name + ".");
		// 	div.append(h2);
		// 	var img = $("<img>").attr(src, bestMatch.image);
		// 	div.append(image);
		// 	$("characterInfo").append(div);
		// }

		// bestMatch();

		// function clear(){
		// 	totalDifference = 0;
		// 	bestMatch;
		// 	results = [];
		// }

		// $("#playAgain").on("click", function(){
		// 	clear();
		// });

	});
}