var gulp = require('gulp');
var sass = require('gulp-sass');

/*
gulp.task('message', function() {
    console.log('Hello, World with Gulp!');
});
*/

gulp.task('sass', function() {
    return gulp.src('app/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});
