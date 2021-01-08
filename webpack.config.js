const path = require('path')
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './src/index.js',
  externals: [nodeExternals()],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
    library: '',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }
    ]
  }
}