const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");

//gulp.task("default", ["es6", "watch"]);

gulp.task("css", function () {
  return gulp
    .src("src/assets/sass/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(concat("index.css"))
    .pipe(gulp.dest("src"));
});

gulp.task("watch", function () {
  gulp.watch("src/assets/sass/**/*.scss", gulp.series("css"));
});
