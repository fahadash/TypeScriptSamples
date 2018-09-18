/// <binding AfterBuild='default, lib' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

var paths = {
    scripts: ['scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map'],
    lib: ['node_modules/systemjs/dist/*']
};

gulp.task('clean', function () {
    return del(['wwwroot/scripts/**/*']).del("wwwroot/lib/**/*");
});

gulp.task('default', function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'));
});

gulp.task('lib', function () {
    gulp.src(paths.lib).pipe(gulp.dest('wwwroot/lib'));
}); 