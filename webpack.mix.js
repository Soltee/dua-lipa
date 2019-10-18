const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('./public/app.js', 'dist/script')
	.options({
    	postCss: [
     	    tailwindcss('./tailwind.config.js'),
    	]
  	});
    // .sass('resources/sass/app.scss', 'public/css');