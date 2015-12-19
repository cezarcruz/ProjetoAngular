var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

var filesPrefix = "./src/main/webapp/";

//order
var files = [
    'js/app/app.js',
    'js/app/config/config.js',
    'js/app/config/urls.service.js',
    'js/app/modal/modal.controller.js',
    'js/app/series/series.js',
    'js/app/series/series.controller.js',
    'js/app/series/series.service.js',
    'js/app/character/character.js',
    'js/app/character/character.service.js',
    'js/app/character/character.controller.js',
    'js/app/translate/translate.js',
    'js/app/translate/translate.loader.js',
    'js/app/home/home.js',
    'js/app/home/home.controller.js',
    'js/app/directives/last-series/last-series.module.js',
    'js/app/directives/last-series/last-series.directive.js'
];

for (var x = 0; x < files.length; x++) {
    files[x] = filesPrefix + files[x] ;
}

gulp.task('lint', function() {
	gulp.src(files).pipe(jshint()).pipe(jshint.reporter('default'));
});

gulp.task('dist', function() {
	gulp.src(files)
		.pipe(concat("./src/main/webapp/js/dist"))
		.pipe(rename('dist.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest("./src/main/webapp/js/dist"));
});

gulp.task('default', function() {

	gulp.run('lint', 'dist');

	gulp.watch(files, function(evt) {
		gulp.run('lint', 'dist');
	});

});
