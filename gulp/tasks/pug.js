export default function pug() {
  const {src, dest} = app.gulp
  const {build, source} = app.path
  const {browserSync, gulpIf, replace, pug, webpHtmlNosvg} = app.plugins

  return src(source.pug)
    .pipe(app.errorHandler('PUG'))
    .pipe(pug({pretty: app.isDev}))
    .pipe(replace(/@img\//g, 'images/'))
    .pipe(gulpIf(app.isBuild, webpHtmlNosvg()))
    .pipe(dest(build.html))
    .pipe(browserSync.stream())
}
