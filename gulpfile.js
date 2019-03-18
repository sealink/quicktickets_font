var
  gulp = require('gulp'),
  del = require('del'),
  $ = require('gulp-load-plugins')()
;

gulp.task('clean', function() {
  return del(['dist/**/*']);
});

gulp.task('glyphs', function () {
  return gulp.src('config.json')
    .pipe($.fontello())
    .pipe(gulp.dest('dist'))
});

gulp.task('default', gulp.series(['clean', 'glyphs']));
