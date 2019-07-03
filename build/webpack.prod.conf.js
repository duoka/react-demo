const config=require('../config');
const utils=require('./utils');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const proConfig = merge(webpackBaseConfig, {
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

// 压缩文件
if (config.pro.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  proConfig.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      // 算法 默认gzip
      algorithm: 'gzip',
      // 针对文件的正则表达式规则，符合规则的文件被压缩
      test: new RegExp('\\.(' + config.pro.productionGzipExtensions.join('|') + ')$'),
      // 文件大于这个值的会被压缩
      threshold: 10240,
      // 压缩率 默认0.8
      minRatio: 0.8
    })
  )
}

// bundle 分析 analyzer
if (config.pro.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  proConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = proConfig;
