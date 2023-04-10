import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
  return app.gulp
    .src(`${app.path.src}/img/**/*.{jpg,jpeg,png,gif,webp}`)
    .pipe(app.plugins.newer(`${app.path.build}/img`))
    .pipe(webp())
    .pipe(app.gulp.dest(`${app.path.build}/img`))
    .pipe(app.gulp.src(`${app.path.src}/img/**/*`))
    .pipe(app.plugins.newer(`${app.path.build}/img`))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3,
      })
    )
    .pipe(app.gulp.dest(`${app.path.build}/img`))
    .pipe(app.gulp.src(`${app.path.src}/img/**/*.svg`))
    .pipe(app.gulp.dest(`${app.path.build}/img`))
    .pipe(app.plugins.browserSync.stream());
};
