var gulp = require('gulp'),
    sequence = require('run-sequence'),
    gutil = require('gulp-util'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch'),
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
  tests: 'dist/**/test*.js',
  graphiql: ['node_modules/graphiql/graphiql.js', 'node_modules/graphiql/graphiql.css', 'src/index.html']
};

gulp.task('babel', function(){
  return gulp.src(paths.src)
      .pipe(babel({
        presets: ['es2015']
      }))
      .on("error", onError)
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

gulp.task('graphiql', function(done){
  gulp.src(paths.graphiql)
  .pipe(gulp.dest(paths.dist));
  done();
});

gulp.task('full', function(done) {
  sequence('clean', 'graphiql', 'babel', done);
});

gulp.task('default', ['full']);
