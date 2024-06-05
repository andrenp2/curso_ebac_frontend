// definir os pacotes importados
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// minificar imagens; NOT WORKING
//const imagemin = require('gulp-imagemin');

// definir função

// função para comprimir os arquivos .css
function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

// função para comprmir as imagens gulp-imagemin@7.1.0
// function images() {
//     return gulp.src('./src/images/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('./dist/images'));
// }

exports.default = gulp.parallel(styles);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}