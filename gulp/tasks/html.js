import gulpHtmlImport from "gulp-html-import";

export const html = () => {
  return app.gulp
    .src([`${app.path.src}/html/**/*.html`, `!${app.path.src}/html/**/_*.html`])
    .pipe(gulpHtmlImport(`${app.path.src}/html/components/`))
    .pipe(app.gulp.dest(app.path.build))
    .pipe(app.plugins.browserSync.stream());
};
