import htmlmin from "gulp-htmlmin";

import gulpCssMinify from "gulp-css-minify";

import gulpJsmin from "gulp-jsmin";

export const minifyHTML = () => {
  return app.gulp
    .src(`${app.path.build}/**/*.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(app.gulp.dest(`${app.path.build}`));
};

export const minifyCSS = () => {
  return app.gulp
    .src(`${app.path.build}/css/**/*.css`)
    .pipe(gulpCssMinify())
    .pipe(app.gulp.dest(`${app.path.build}/css`));
};

export const minifyJS = () => {
  return app.gulp
    .src(`${app.path.build}/js/**/*.js`)
    .pipe(gulpJsmin())
    .pipe(app.gulp.dest(`${app.path.build}/js`));
};
