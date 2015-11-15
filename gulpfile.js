var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	plumber = require('gulp-plumber'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	nodemon = require('gulp-nodemon'),
	notify = require('gulp-notify');

function compile() {
	gulp.src('./public/js/app.js')
		.pipe( plumber() )
		.pipe( browserify({ transform: ['babelify', 'reactify'] }) )
		.pipe( jshint() )
		//.pipe( uglify() )
		.pipe( rename({ basename: "bundle" }) )
		.pipe( gulp.dest('./public/js/') )
		.pipe( notify('Completed - ' + new Date(Date.now())) )
};

gulp.task('nodemon-app', function(){
	nodemon({
		script: 'server.js', 
		ignore: ['public/js/bundle.js']
	})
	.on('restart', function(){
		compile();
	});
});

gulp.task('compile-app', function() { compile(); });
gulp.task('watch', function() {
	gulp.watch('public/js/components/**/*.js', ['compile-app']);
});

gulp.task('default', ['nodemon-app']);
