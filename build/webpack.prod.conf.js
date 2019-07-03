const config=require('../config');
const utils=require('./utils');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  output: {
    path: config.pro.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash:16].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  optimization: {
    minimizer: [
      // 压缩js
      new UglifyJSPlugin(),
      // 压缩css
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: true
            ? {
              map: { inline: false }
            }
            : {}
      })
    ],
    splitChunks: {
      chunks: "all",
      minChunks: 1,
      // 抽离模块减少加载时间
      cacheGroups: {
        framework: {
          priority: 200,
          test: "framework",
          name: "framework",
          enforce: true,
          reuseExistingChunk: true
        },
        vendor: {
          priority: 10,
          test: /node_modules/,
          name: "vendor",
          enforce: true,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    // js引用是自动添加
    new HtmlWebpackPlugin({
      template: config.pro.index,
      inject: true,
      minify: {
        // 移除HTML中的注释
        removeComments: true,
        // 删除空白符与换行符
        collapseWhitespace: true,
        // 删除引号,删除不需要引号的值
        removeAttributeQuotes: true
      },
    }),
    // 清理dist文件夹
    new CleanWebpackPlugin(),
    //导出css
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[hash].css'),
      chunkFilename: utils.assetsPath('css/[id].[hash].css'),
    }),
  ]
});
