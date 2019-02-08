// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, './src/lib/index.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
};
