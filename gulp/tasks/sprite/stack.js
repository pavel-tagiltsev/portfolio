import svgoPlugins from './svgoPlugins.js'

const stackConfig = {
  shape: {
    shape: {
      transform: [
        {
          svgo: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: svgoPlugins
                }
              }
            ]
          }
        }
      ]
    }
  },
  mode: {
    stack: {
      dest: '.',
      sprite: 'stack-sprite.svg',
      // In order to enabel this option,
      // look for solution in readme.md file in bug's section
      rootviewbox: false
    }
  }
}

export default function stack() {
  const {src, dest} = app.gulp
  const {build, source} = app.path

  return src(source.sprite.stack)
    .pipe(app.errorHandler('SVG_STACK'))
    .pipe(app.plugins.svgSprite(stackConfig))
    .pipe(dest(build.images))
}
