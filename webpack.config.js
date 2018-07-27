const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const routes = require('./webpack-static-server/routes');
const webpack = require('webpack');


const NODE_ENV = process.env.NODE_ENV || 'dev';

module.exports = {
  entry: {
    selection: './src/app-selection/app.js',
    driver: './src/app-driver/app.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: 'http://localhost:3000/',
    path: path.join(__dirname, 'dist/'),
  },
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: 'common',
      minChunks: 2,
    }),
  ],
  resolve: {
    modules: [
      'src/utils',
      'node_modules',
    ],
    extensions: ['.js', '.css'],
    alias: {
      sharedDriver: path.resolve(__dirname, 'src/app-driver/components/__shared'),
    },
  },
};


if (NODE_ENV === 'dev') {
  module.exports.watch = true;
  module.exports.devtool = 'inline-cheap-module-source-map';
  module.exports.devServer = {
    inline: true,
    port: 3000,
    contentBase: path.join(__dirname, 'dist/'),
    setup: (app) => {
      routes(app);
    },
  };
}

if (NODE_ENV === 'prod') {
  module.exports.plugins.push(new UglifyJsPlugin());
}
