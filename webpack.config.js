const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: {
        keep: /\.git/,
    },
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Virtual Keyboard - My App',
    filename: 'index.html',
    template: 'src/index.html',
  })],
  mode: 'development',
  devServer: {
    static: './dist',
    port: 3002,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};