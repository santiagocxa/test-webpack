const path =  require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    home:path.resolve(__dirname,'src/js/index.js')
  },
  mode: 'development',
  output: {
    path:  path.resolve(__dirname,'dis'),
    filename: 'js/[name].js'
  },
  devServer:{
    hot: true,
    open: true
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Plugins'
    })
  ]
}