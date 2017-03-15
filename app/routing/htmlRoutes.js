var path = require("path");

// The app will retrieve the home.html file when the user is on the root route.
module.exports= function(app){
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
// The app will retrieve the survey.html file when the user is on the /survey route.
	app.get("/:survey", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});
}

