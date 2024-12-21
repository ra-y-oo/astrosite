const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');

module.exports = {
  plugins: [
    require('postcss-import'), // Enable importing CSS files
    postcssJitProps(OpenProps),
    require('autoprefixer'),
  ],
};
