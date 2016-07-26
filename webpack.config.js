var path = require('path');

module.exports = {
  entry: './src/gateway.js',
  output: {
    path: './public/static/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' }
    ],
    noParse: /node_modules\/json-schema\/lib\/validate\.js/
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};