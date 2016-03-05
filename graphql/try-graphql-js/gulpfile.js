var gulp = require('gulp'),
    sequence = require('run-sequence'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    eslint = require('gulp-eslint'),
    watch = require('gulp-watch'),
    mocha = require('gulp-mocha'),
    del = require('del');

var ci = false;

function onError(err) {
  if (ci) {
    // stop in CI
    process.exit(1);
  } else {
    // keep going in non-CI
    gutil.log(err);
    gutil.beep();
    this.emit('end');
  }
}

var paths = {
  src: 'src/**/*.js',
  dist: 'dist',
  tests: 'dist/**/test*.js'
};

gulp.task('babel', function(){
  return gulp.src(paths.src)
      //.pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
      .on("error", onError)
      //.pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', ['full'], function() {
  watch(paths.src, function (){
    gulp.start('full');
  });
});

gulp.task('clean', function (done){
  del([paths.dist], done);
  done();
});

gulp.task('full', function(done) {
  sequence('clean', 'babel', done);
});

gulp.task('default', ['full']);
