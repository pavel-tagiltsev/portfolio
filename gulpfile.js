import gulp from 'gulp'
import path from './gulp/config/path.js'
import plugins from './gulp/config/plugins.js'
import errorHandler from './gulp/config/errorHandler.js'

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  gulp,
  path,
  plugins,
  errorHandler
}

//Main
import pug from './gulp/tasks/pug.js'
import scss from './gulp/tasks/scss.js'
import reset from './gulp/tasks/reset.js'
import images from './gulp/tasks/images.js'
import js from './gulp/tasks/js.js'
import files from './gulp/tasks/files.js'

// Sprite
import spriteStack from './gulp/tasks/sprite/stack.js'
import spriteSymbol from './gulp/tasks/sprite/symbol.js'

// Fonts
import otfToTtf from './gulp/tasks/fonts/otfToTtf.js'
import ttfToWoff from './gulp/tasks/fonts/ttfToWoff.js'
import transferWoff from './gulp/tasks/fonts/transferWoff.js'
import fontStyle from './gulp/tasks/fonts/fontStyle.js'

// Additional
import server from './gulp/tasks/server.js'
import zip from './gulp/tasks/zip.js'

function watcher() {
  gulp.watch(path.watch.pug, pug)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
  gulp.watch(path.watch.files, files)
}

const fonts = gulp.series(otfToTtf, ttfToWoff, transferWoff, fontStyle)
const sprite = gulp.parallel(spriteStack, spriteSymbol)
const mainTasks = gulp.series(
  fonts,
  sprite,
  gulp.parallel(pug, scss, js, images, files)
)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)

const deployZIP = gulp.series(reset, mainTasks, zip)

export {build}
export {deployZIP}
export {sprite}

gulp.task('default', dev)
