var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var bower = require('gulp-bower-files');

var paths = {
  scripts: "js/**/*.js"
}

gulp.task('bower', function() {
  bower()
  .pipe(uglify())
  .pipe(concat('all.min.js'))
  .pipe(gulp.dest('lib/'))
});

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
  .pipe(uglify())
  .pipe(concat('app.min.js'))
  .pipe(gulp.dest('lib/'))
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});
