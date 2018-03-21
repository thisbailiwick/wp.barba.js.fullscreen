var gulp        = require('gulp');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil      = require('gulp-util');
var public_js_path = './public/js/';

gulp.task('js', function () {


	// set up the browserify instance on a task basis
	var b = browserify({
		entries: [public_js_path + 'barba-full-screen-public'],
		debug:   true
	});

	b.exclude('./public/js/barba.js');

	return b.bundle()
					.pipe(source('barba-full-screen-public.js'))
					.pipe(buffer())
					.pipe(sourcemaps.init({loadMaps: true}))
					// Add transformation tasks to the pipeline here.
					// .pipe(uglify())
					.on('error', gutil.log)
					.pipe(sourcemaps.write('./'))
					.pipe(gulp.dest(public_js_path + '/dist/'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {

	done();
});
gulp.task('watch', null, function(){
	gulp.watch(public_js_path + '*.js', ['js']);
});
gulp.task('default', ['watch', 'js-watch', 'js']);