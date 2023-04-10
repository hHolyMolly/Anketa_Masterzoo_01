import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  path: path,
  plugins: plugins,
  gulp: gulp,
};

import { clean } from "./gulp/tasks/clean.js";

import { html } from "./gulp/tasks/html.js";
import { js } from "./gulp/tasks/js.js";
import { scss } from "./gulp/tasks/scss.js";

import { images } from "./gulp/tasks/images.js";

import { server } from "./gulp/tasks/server.js";

const watching = () => {
  gulp.watch(`${path.src}/html/**/*.html`, html);
  gulp.watch(`${path.src}/js/**/*.js`, js);
  gulp.watch(`${path.src}/scss/**/*.scss`, scss);
  gulp.watch(`${path.src}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`, images);
};

const mainTasks = gulp.parallel(html, js, scss, images);

const gulp_develop = gulp.series(
  clean,
  mainTasks,
  gulp.parallel(watching, server)
);

gulp.task("developer", gulp_develop);

import { minifyHTML, minifyCSS, minifyJS } from "./gulp/tasks/minify.js";

const gulp_build = gulp.series(gulp.parallel(minifyHTML, minifyCSS, minifyJS));

gulp.task("build", gulp_build);
