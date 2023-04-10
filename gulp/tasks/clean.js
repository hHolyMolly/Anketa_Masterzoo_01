import gulpClean from "gulp-clean";

const option = {
  read: false,
  allowEmpty: true,
};

export const clean = () => {
  return app.gulp.src(`${app.path.build}`, option).pipe(gulpClean());
};
