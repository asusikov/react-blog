const HtmlPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');

const srcRoot = path.join(__dirname, 'src');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(srcRoot, 'index.js')
  ],
  output: {
    publicPath: '/',
    filename: 'app.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'env']
      }
    },
    {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader?importLoaders=1'
      ]
    },
    { test: /\.(eot|png|ttf|svg|woff|woff2)$/, loader: 'url-loader'}
    ]
  },
  resolve: {
    modules: [
      srcRoot,
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlPlugin({
      template: 'public/index.html'
    }),
    new Dotenv({
      path: './.env'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
