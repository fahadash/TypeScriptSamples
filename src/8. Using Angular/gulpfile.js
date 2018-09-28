/// <binding AfterBuild='default, lib' Clean='clean' BeforeBuild='delbefore' />
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

var lib = {
    angular: ['node_modules/@angular/**/*.*'],
    rxjs: ['node_modules/rxjs/**/*.*'],
    reflect: ['node_modules/reflect-metadata/*.js'],

    zone: ['node_modules/zone.js/dist/*.js']
}

var delbefore = {
    tsconfigs: ['node_modules/rxjs/src/tsconfig.json']
}

gulp.task('clean', function () {
    return del(['wwwroot/scripts/**/*']).del("wwwroot/lib/**/*");
});

gulp.task('default', function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'));
});

gulp.task('lib', function () {
    gulp.src(paths.lib).pipe(gulp.dest('wwwroot/lib'));
    gulp.src(lib.angular).pipe(gulp.dest('wwwroot/lib/@angular'));

    gulp.src(lib.rxjs).pipe(gulp.dest('wwwroot/lib/rxjs'));
    gulp.src(lib.reflect).pipe(gulp.dest('wwwroot/lib/reflect-metadata'));
    gulp.src(lib.zone).pipe(gulp.dest('wwwroot/lib/zone'));
}); 

gulp.task('delbefore', function () {
    return del(delbefore.tsconfigs);
});

