var gulp = require("gulp"),
    nunjucksRender = require("gulp-nunjucks-render");

gulp.task("nunjucks", function() {
    nunjucksRender.nunjucks.configure(["templates/"]);
    // Gets .html and .nunjucks files in templates
    return gulp.src("templates/**/*.+(html|nunjucks)")
    // Renders template with nunjucks
    .pipe(nunjucksRender())
    // output files in views folder
    .pipe(gulp.dest("views"))
});