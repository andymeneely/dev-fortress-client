/* global process */

const ProjectPackage = require('./package.json');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: './bin',
    filename: '[chunkhash].bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx|\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2016', 'es2015'],
          plugins: ['transform-react-jsx'],
        },
      },
      {
        test: /\.html?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'file-loader',
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.(md|MD)$/,
        loader: 'html!markdown?gfm=true',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: ProjectPackage.name,
      template: './src/index.ejs',
      inject: false,
    }),
    new ExtractTextPlugin('[contenthash].bundle.css'),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.md', '.MD'],
    alias: {
      css: path.resolve(__dirname, './src/css'),
      img: path.resolve(__dirname, './src/img'),
      lib: path.resolve(__dirname, './src/js/lib'),
      modules: path.resolve(__dirname, './src/js/modules'),
    },
  },
};
