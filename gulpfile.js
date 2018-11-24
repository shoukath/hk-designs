var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
const imagemin = require('gulp-imagemin');
 
gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('images', () =>
    gulp.src('./images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'))
);

gulp.task('default', ['less', 'images']);
