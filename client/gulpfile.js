const gulp = require('gulp');
const eslint = require('gulp-eslint');

const path = {
	scripts: ['src/**/*.js']
};

gulp.task('log', () => {
	console.log('Please use "npm run" to see available list of commands');
});

// To see lint errors
gulp.task('lint', () => {
    return gulp.src(path.scripts)
        .pipe(eslint())
        .pipe(eslint.results((results) => {
	        console.log('Total Results: ' + results.length);
	        console.log('Total Warnings: ' + results.warningCount);
	        console.log('Total Errors: ' + results.errorCount);
    	}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('watch', () => {
	gulp.watch(path.scripts, ['lint']);
});

gulp.task('dev', ['watch']);
