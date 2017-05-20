const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'eval-source-map',
  watch: true,
  module: {
    loaders: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.join(__dirname,'/src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015','stage-0','react']
        }
      }
    ]
  }
}
