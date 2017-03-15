var friendData = require("../data/friends");

// Exporting the data...
module.exports = function(app){

	// App will get all of the friends data when the user clicks on the API friends link.
	app.get("/api/friends", function(req, res){

  		return res.json(friendData);
	});

	// App will post the frienc, or in this case, character that matches them according to their score.
	app.post("/api/friends", function(req, res){
		// Empty array for the friendData scores.
		var scores = [];
		// Empty array to hold all of the total differences between each array compared to the user's scores.
		var results = [];
		// Total difference set to 0.
		var totalDifference = 0;
		var bestMatch;
		
		// New friend data incoming...
		var newFriend = req.body;
		// Taking just the scores out of the new friend object.
		var newScores = newFriend.scores;

		// Pushing all of the friendData into the scores array.
		for (var i = 0; i < friendData.length; i++) {
			scores.push(friendData[i].scores);
		}
		
		// Running this for each array within the scores array..
		scores.forEach( function(element, index) {
			// Using a for loop to completely compare each value from the newFriend scores.
			for(var i = 0; i < newScores.length; i++) {
	  			// Difference is set to absolute value when comparing the newFriend score elements with the current index of the friendData score element.
	  			var difference = Math.abs(newScores[i] - element[i]);
	  			// Adding the difference each time and storing sum as the total difference.
	  			totalDifference += difference;
	  		}
	  		// Pushing the total difference into the results array.
	  		results.push(totalDifference);
	  		// Setting the total difference back to 0 before iterating through the next index of the scores array.
	  		totalDifference = 0;

		});
		// Identifying the smallest number in the results array.
		Array.min = function( array ) {
			return Math.min.apply(Math, array);
		};
		var lowest = Array.min(results);
		// Find the index of the smallest number- this index should match the friend/ character that is in the existingfriendData.
		var index = results.indexOf(lowest);
		bestMatch = friendData[index];

		// Send the best match results of this as json.
		res.json(bestMatch);

	});
}