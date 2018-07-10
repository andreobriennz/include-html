const gulp = require('gulp');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');

const settings = {
    dest: 'dist', // destination of compiled files
}

const files = {
    scripts: [ 
        'src/include.js',
        'src/router.js',
    ],
}

// JavaScript: concat files together, compile es2015 to es5, minify
gulp.task('scripts', function() {
    return gulp.src( files.scripts ) // array of files to be combined into app.js
        .pipe(concat( 'app.js' ))
        .pipe(babel()) // compile to ES5
        .pipe(gulp.dest( settings.dest ))
        .pipe(rename( 'app.min.js' ))
        .pipe(uglify()) // minify
        .pipe(gulp.dest( settings.dest ));
});


gulp.task('watch', function() {
    gulp.watch( files.scripts, ['scripts']);
    gulp.watch( files.styles, ['sass']);
});


gulp.task('default', ['scripts', 'watch']);