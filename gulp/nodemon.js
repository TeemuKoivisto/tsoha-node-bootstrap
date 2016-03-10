var gulp = require("gulp"),
	nodemon = require("gulp-nodemon");

gulp.task("nodemon", ["watch-app"], function() {
	// jos F5:n painaminen tuntuu raskaalta niin voi yrittää saada Livereloadin toimimaan
    // sen pitäisi automaattisesti refreshaa sivu kun serveri käynnistyy uudelleen
	
    // livereload.listen();
	nodemon({
		script: "index.js",
		ext: "js html ejs css",
		ignore: ["views/**/*.js", "views/**/*.css", "gulp", "test"]
	}).on("restart", function(){
		console.log("server restart");
		 // livereload.reload();
	})
})