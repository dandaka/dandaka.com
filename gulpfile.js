var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('default', ['jade']);

gulp.task('jade', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./src/jade/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./dist/'))
});