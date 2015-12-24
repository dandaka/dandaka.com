var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var connect = require('gulp-connect');

gulp.task('default', ['jade', 'sass', 'connect', 'watch']);

gulp.task('jade', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./src/jade/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./public/'))
});

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./public/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./src/jade/*.jade'], ['jade']);
  gulp.watch(['./src/sass/*.scss'], ['sass']);
});