'use strict';

const path = require('path');

module.exports = {
  dev: {
    // 资源文件编译后存放的文件夹名称
    assetsSubDirectory: 'static',
    // 公共的路径
    assetsPublicPath: '/',
    index: path.resolve(__dirname, '../src/index.html'),
    host: '0.0.0.0',
    port: 8080,

  },
  pro: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    index: path.resolve(__dirname, '../src/index.html'),
    // gzip压缩
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    // bundle分析工具 yarn run
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
