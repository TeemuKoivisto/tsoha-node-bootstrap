var gulp = require("gulp"),
	concat = require("gulp-concat");
	
gulp.task("concat-js", function() {
    gulp.src("views/**/*.js")
    .pipe(concat("all.js"))
    .pipe(gulp.dest("public/"));
});

gulp.task("concat-css", function() {
    gulp.src("views/**/*.css")
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("public/"));
});

gulp.task("watch-app", ["concat-js", "concat-css"], function() {
	gulp.watch("views/**/*.js", ["concat-js"])
	gulp.watch("views/**/*.css", ["concat-css"])
});