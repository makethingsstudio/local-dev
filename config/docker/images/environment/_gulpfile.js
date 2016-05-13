/*
 * TOC
 *
 * Default Task
 */


const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;





/* ==========================================================================
   § Default Task
   ========================================================================== */
gulp.task('default', () => {

});




/* ==========================================================================
   § Copy Public Files
   ========================================================================== */
gulp.task('copy', () => {
    return gulp.src('public/**')
        .pipe(gulp.dest('.tmp'))
});


/* ==========================================================================
   § Serve
   ========================================================================== */


gulp.task('serve', ['copy'], () => {
    browserSync({
        notify: false,
        port: 3000,
        server: {
            baseDir: ['.tmp'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });
});
