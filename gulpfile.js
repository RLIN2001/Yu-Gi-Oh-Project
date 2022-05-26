const gulp=require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify=require('gulp-minify');

gulp.task('styles',()=>
{

    return gulp.src('scss/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('css'));
})



gulp.task('watch',()=>{

    return gulp.watch('scss/*.scss',(done)=>{
        gulp.series(['styles']) (done)
    })
})



gulp.task('minifyjs',()=>{
    return gulp.src('js/*.js')
    .pipe(minify())
    .pipe(gulp.dest('js'))
})


