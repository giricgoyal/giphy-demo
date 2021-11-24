const webpack = require('webpack');
const common = require('./webpack.common.js')

module.exports = function(configDirs) {
  const devConfig = Object.assign({}, common);
  devConfig.mode = 'production'

  console.log('\x1b[36m%s\x1b[0m', 'Building for production...');

  return devConfig;
};