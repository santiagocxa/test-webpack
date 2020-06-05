const path =  require('path')

module.exports = {
  entry: {
    home:path.resolve(__dirname,'src/js/index.js')
  },
  mode: 'development',
  output: {
    path:  path.resolve(__dirname,'dis'),
    filename: 'js/[name].js'
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}