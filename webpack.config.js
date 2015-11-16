var path = require('path');

module.exports = {
  entry: './example/src/js/index.js',
  output: {
    path: path.join(__dirname,'example','build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015'
          ]
        }
      },
    ]
  },
};
