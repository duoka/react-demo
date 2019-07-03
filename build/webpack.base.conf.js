const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config=require('../config');

const SRC_PATH  = path.resolve(__dirname, '../src');

module.exports = {
  // 入口
  entry: {
    src: path.join(SRC_PATH, 'index.js'),
    framework:['react','react-dom'],
  },
  // 出口
  output: {
    path: config.pro.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.pro.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  module: {
    rules: [
      // 转译为ES5
      {
        test: /\.js?$/,
        use: "babel-loader",
        include: SRC_PATH
      },
      // 编译css
      {
        test: /\.(css)$/,
        use: [
          // 抽离css
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][local]__[hash:7]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      // 编译less
      {
        test: /\.(less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][local]__[hash:7]'
            }
          },
          {
            loader: 'less-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      // 图片
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[ext]'
            },
          },
        ],
      },
      // 字体
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'font/[name].[ext]'
            },
          },
        ],
      },
    ]
  },
};
