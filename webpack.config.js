const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const NODE_ENV = process.env.NODE_ENV || 'dev';

module.exports = {
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
  },
  module: {
    rules: [],
  },
};


if (NODE_ENV === 'dev') {
  module.exports.entry = './src/app.js';
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
  module.exports.module.rules.push({
    test: /slide-v.js$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ['./src/utils/minification'],
  });
}
