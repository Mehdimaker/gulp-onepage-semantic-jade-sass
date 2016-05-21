var gulp = require('gulp'),
		sass = require('gulp-sass'),
		jade = require('gulp-jade'),
    connect = require('gulp-connect');
 
gulp.task('templates', function() {
  return gulp.src('./templates/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'))
    .pipe(connect.reload())
 
});

gulp.task('sass', function() {
  return gulp.src('./css/style.sass')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(connect.reload())
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});

gulp.task('watch', function(){
	gulp.watch('css/*.sass',['sass']);
	gulp.watch('templates/*.jade',['templates']);
})

gulp.task('default',['sass','templates','connect','watch'], function() {
});