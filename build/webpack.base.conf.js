const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config=require('../config');

const SRC_PATH  = path.resolve(__dirname, '../src');

module.exports = {
  // 入口
  entry: {
    src: path.join(SRC_PATH, 'main.js'),
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
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      containers: path.resolve(__dirname, '../src/containers'),
      redux: path.resolve(__dirname, '../src/redux'),
      router: path.resolve(__dirname, '../src/router'),
      utils: path.resolve(__dirname, '../src/utils'),
    }
  },
  module: {
    rules: [
      // 转译为ES5
      {
        test: /\.js?$/,
        use: "babel-loader",
        exclude: /(node_modules|bower_components)/,
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
              importLoaders: 1,
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
              importLoaders: 1,
              localIdentName: '[path][local]__[hash:7]'
            }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
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
              name: 'images/[name].[ext]'
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
              name: 'fonts/[name].[ext]'
            },
          },
        ],
      },
    ]
  },
};
