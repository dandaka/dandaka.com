var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var favicons = require('gulp-favicons');

var config = {
  bowerDir: './bower_components' 
}

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
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass({
      includePaths: [
        config.bowerDir + '/bootstrap/scss'
      ],
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src(['./public/*.html', './public/css'])
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./src/jade/*.jade'], ['jade']);
  gulp.watch(['./src/sass/*.scss'], ['sass']);
  watch(['./src/jade/*.jade', './src/sass/*.scss']).pipe(connect.reload());
});
 
gulp.task("favicons", function () {
  gulp.src("./public/img/bricks.jpg").pipe(favicons({
      appName: "Vlad Rafeev",
      appDescription: "Vlad Rafeev | software project manager",
      developerName: "Vlad Rafeev",
      developerURL: "http://dandaka.com/",
      background: "#FFFFFF",
      path: "favicons/",
      url: "http://dandaka.com/",
      display: "standalone",
      orientation: "portrait",
      version: 1.0,
      logging: true,
      online: false,
      html: "favicons.html",
      replace: true
  })).pipe(gulp.dest("./public/favicons"));
});