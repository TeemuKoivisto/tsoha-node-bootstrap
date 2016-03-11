var gulp = require("gulp"),
	concat = require("gulp-concat");
	
gulp.task("concat-js", function() {
    gulp.src("templates/**/*.js")
    .pipe(concat("all.js"))
    .pipe(gulp.dest("views/"));
});

gulp.task("concat-css", function() {
    gulp.src("templates/**/*.css")
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("views/"));
});

gulp.task("watch-app", ["concat-js", "concat-css", "nunjucks"], function() {
	gulp.watch("templates/**/*.js", ["concat-js"])
	gulp.watch("templates/**/*.css", ["concat-css"])
    gulp.watch("templates/**/*.html", ["nunjucks"])
});