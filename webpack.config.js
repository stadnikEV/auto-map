const path = require('path');
const routes = require('./webpack-static-server/routes');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'dev';

module.exports = {
  entry: {
    selection: './src/app-selection/app.js',
    driver: './src/app-driver/app.js',
  },
  output: {
    filename: '[name].js',
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
  resolve: {
    modules: [
      'src/images/',
      'utils',
      'node_modules',
    ],
    extensions: ['.js', '.css', '.svg'],
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
  // module.exports.plugins = [
  //   new HtmlWebpackPlugin({
  //     filename: 'index.html',
  //     template: './src/app-selection/index.html',
  //     chunks: ['selection'],
  //   }),
  //   new HtmlWebpackPlugin({
  //     filename: 'driver.html',
  //     template: './src/app-driver/driver.html',
  //     chunks: ['driver'],
  //   }),
  // ];
  module.exports.module.rules.push({
    test: /\.css$/,
    // loader: 'style-loader!css-loader?modules',
    loaders: ['style-loader', 'css-loader'],
  });
}
