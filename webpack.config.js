const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const NODE_ENV = process.env.NODE_ENV || 'dev';

module.exports = {
  entry: './src/app.js',
  output: {
    filename: '[name].app.js',
    chunkFilename: '[name].app.js',
    path: path.resolve(__dirname, 'public'),
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
    ],
  },
};


if (NODE_ENV === 'dev') {
  // module.exports.entry = './src/app.js';
  module.exports.watch = true;
  module.exports.devtool = 'inline-cheap-module-source-map';
  module.exports.devServer = {
    inline: true,
    port: 3000,
    contentBase: 'dist/',
  };
  module.exports.plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ];
  module.exports.module.rules.push({
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader'],
  });
}
