const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  output: {
    // 添加文件hash--无缓存
    filename: "js/[name].[chunkhash:16].js",
  },
  plugins: [
    // js引用是自动添加
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    }),
    // 清理dist文件夹
    new CleanWebpackPlugin(),
    //导出css
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),
  ]
});
