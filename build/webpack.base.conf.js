const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const DIST_PATH = path.resolve(__dirname, '../dist');
const SRC_PATH  = path.resolve(__dirname, '../src');

module.exports = {
  // 入口
  entry: {
    src: path.join(SRC_PATH, 'index.js'),
    framework:['react','react-dom'],
  },
  // 出口
  output: {
    filename: "js/bundle.js",
    path: DIST_PATH
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
              localIdentName: '[local]__[hash:7]'
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
              localIdentName: '[local]__[hash:7]'
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
  // 抽离公共模块
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
  }
};
