const config = require('../config');
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: config.dev.index,
      inject: true,
      minify: {
        html5: true
      },
      hash: false
    }),
    // 热更新
    new webpack.HotModuleReplacementPlugin(),
    //导出css
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),
  ],
  devServer: {
    host: config.dev.host,
    port: config.dev.port,
    historyApiFallback: true,
    contentBase: path.join(__dirname, '../src'),
    compress: true,
    hot: true,
    https: false,
    noInfo: true,
    open: true,
    proxy: {}
  }
});
