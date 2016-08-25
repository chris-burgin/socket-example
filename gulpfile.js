// module requires
const gulp = require('gulp')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const stylus = require('gulp-stylus')
const webpack = require('webpack-stream')
const named = require('vinyl-named')
const babel = require('gulp-babel')

gulp.task('stylus', function () {
  return gulp.src('src/css/*.styl')
  .pipe(stylus())
  .pipe(autoprefixer({
    browsers: ['> 1%', 'Last 5 Versions'],
    cascade: false
  }))
  .pipe(cssnano({
    'zindex': false
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('public/css'))
})

// exclude root from babel
gulp.task('javascript-external', function () {
  return gulp.src('src/js/external/*.js')
  .pipe(gulp.dest('public/js/external/'))
})

gulp.task('javascript', function () {
  return gulp.src(['src/js/main.js'])
  .pipe(named())
  .pipe(webpack())
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('public/js/'))
})

gulp.task('img', function () {
  return gulp.src('src/img/**/*.*')
  .pipe(gulp.dest('public/img/'))
})

// run 'gulp watch'
gulp.task('watch', function () {
  gulp.watch('src/css/**/*.styl', ['stylus'])
  gulp.watch('src/js/**/*.js', ['javascript'])
  gulp.watch('src/js/external/*.js', ['javascript-external'])
  gulp.watch('src/img/**/*.*', ['img'])
})

// Default gulp task that runs when you 'gulp'
gulp.task('default', ['stylus', 'javascript-external', 'javascript', 'img'])
