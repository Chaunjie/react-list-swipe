var gulp = require('gulp');

var del = require('del');

var babel = require('gulp-babel');


gulp.task('default', function(done){
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest('lib'));
});

