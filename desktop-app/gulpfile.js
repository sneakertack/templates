var gulp = require('gulp');

// Gulp's homework list. This format is used later to run task $0 with source glob $1 and destination path folder $2. Make sure task $0 is actually defined in SUBTASKS. $3 is an optional watch glob, otherwise it uses $1.
var homeworkList = [
  ['jade', 'index.jade', '.', '*.jade'],
  ['sass', 'styles/app.scss', 'styles', 'styles/*.scss']
];

/**
 * 0. MAIN DEFAULTY THINGS.
 * Utilises homeworkList above.
 */

gulp.task('default', homeworkList.map(function (homework) {return homework[0];}));

gulp.task('watch', ['default'], function () {
  homeworkList.forEach(function (homework) {
    gulp.watch(homework[3] || homework[1], [homework[0]]);
  });
});

/**
 * 1. SUBTASKS.
 * Define component tasks here.
 */

// If you want to define them manually.
// gulp.task('jade', function () {
//   gulp.src('blabla').pipe(somePlugin()).pipe(gulp.dest('someDest'));
// });

// I'm auto-ing it.

var plugins = {
  // Replace undefined with plugin options object if necessary.
  jade: [require('gulp-jade'), undefined],
  sass: [require('gulp-sass'), undefined]
};

homeworkList.forEach(function (homework) {
  gulp.task(homework[0], function () {
    var plugin = plugins[homework[0]][0];
    var opts = plugins[homework[0]][1];
    gulp.src(homework[1]).pipe(plugin(opts)).pipe(gulp.dest(homework[2]));
  });
});
