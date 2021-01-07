const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    // another: './src/another-module.js'
  }, 
  // mode: 'development',
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test:  /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // },
  plugins: [
    new webpack.ProvidePlugin({
      join: ['lodash', 'join']
    })
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'caching'
    // }),
    // new webpack.HashedModuleIdsPlugin(),
  ],
  output: {
    // chunkFilename: '[name].bundle.js',
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/index.js'),
        use: 'imports-loaders?this=>window'
      },
      {
        test: require.resolve('./src/global.js'),
        use: 'exports-loader?file,parse=helpers.parse'
      }
    ]
  }
}