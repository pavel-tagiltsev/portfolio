export default function pug() {
  const {src, dest} = app.gulp
  const {build, source} = app.path
  const {browserSync, gulpIf, replace, pug, htmlImgWrapper} = app.plugins

  return src(source.pug)
    .pipe(app.errorHandler('PUG'))
    .pipe(pug({pretty: app.isDev}))
    .pipe(replace(/@img\//g, 'images/'))
    .pipe(
      gulpIf(
        app.isBuild,
        htmlImgWrapper({
          logger: true, // false for not showing message with amount of wrapped img tags for each file
          extensions: ['.jpg', '.png', '.jpeg'] // write your own extensions pack (case insensitive)
        })
      )
    )
    .pipe(dest(build.html))
    .pipe(browserSync.stream())
}
