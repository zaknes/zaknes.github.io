let mix = require('laravel-mix');
let tailwind = require('tailwindcss');
require('laravel-mix-purgecss');

mix.setPublicPath('public')
  .less('less/app.less', 'public/css')
  .options({
    postCss: [
      tailwind('./tailwind.js'),
    ]
  });

if (mix.inProduction()) {
  mix.purgeCss({
    enabled: true,

    globs: [
      path.join(__dirname, 'public/*.html'),
    ],
  });
}
