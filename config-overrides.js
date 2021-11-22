/* eslint-disable */
const {
  addLessLoader,
  addWebpackPlugin,
  disableEsLint,
  override,
  fixBabelImports,
} = require('customize-cra');
const webpack = require('webpack');
const fs = require('fs');
const README = fs.readFileSync('README.md', 'utf8');

module.exports = override(
  // Disable eslint for webpack config.
  disableEsLint(),

  // Add LESS loader support for antd.
  addLessLoader({ javascriptEnabled: true }),

  // Extract version from /pedl/__version__.py and pass it to process.env.
  addWebpackPlugin(
    new webpack.DefinePlugin({
      README: JSON.stringify(README),
    })
  )
);
  
