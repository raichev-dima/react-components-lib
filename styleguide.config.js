const path = require('path');

module.exports = {
  title: 'Aria components',
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  components: 'src/lib/**/[A-Z]*.js',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
};