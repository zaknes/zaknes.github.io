require('laravel-mix-purgecss')

const mix = require('laravel-mix')
const tailwind = require('tailwindcss')

mix.setPublicPath('public')
  .less('src/less/app.less', 'public/css')
  .options({
    postCss: [
      tailwind('./tailwind.js'),
    ]
  })

if (mix.inProduction()) {
  mix.purgeCss({
    folders: ['public', 'src']
  })
}
