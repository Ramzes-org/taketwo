var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
        	baseDir: "./"
        }
    });

    
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("sass/*.scss").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function(){
	return gulp.src('sass/main.scss')
		.pipe(sass({outputStyle:"expanded"}).on('error', sass.logError))
    .pipe(gulp.dest('demo/css'))
    .pipe(browserSync.stream())
});

gulp.task('watch', function(){
	gulp.watch('sass/main.scss', ['sass']);
});



gulp.task('default', ['serve', 'watch']);