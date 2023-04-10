export const server = () => {
  app.plugins.browserSync.init({
    server: {
      baseDir: `${app.path.build}`,
    },
    notify: false,
    port: 3000,
  });
};
