const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'dev';

const commonConfig = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.join(__dirname, 'src'),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
              publicPath: 'http://localhost:3000/images/',
            },
          },
        ],
      },
    ],
  },
  resolveLoader: {
    modules: ['node_modules', 'webpack/loaders'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: 'common',
      minChunks: 2,
    }),
  ],
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    extensions: ['.js', '.css'],
  },
};


if (NODE_ENV === 'prod') {
  commonConfig.plugins.push(new UglifyJsPlugin());
}

module.exports = commonConfig;
