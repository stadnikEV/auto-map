const path = require('path');
const commonConfig = require('./common-config');
const cloneDeep = require('lodash.clonedeep');

const passengerConfig = cloneDeep(commonConfig);

const NODE_ENV = process.env.NODE_ENV || 'dev';

passengerConfig.entry = {
  passenger: './src/app-passenger.js',
};

passengerConfig.output = {
  filename: '[name].js',
  chunkFilename: '[name].js',
  publicPath: 'http://localhost:3000/',
  path: path.join(__dirname, '../dist'),
};

passengerConfig.module.rules.push({
  enforce: 'pre',
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'set-app-name-passenger',
});

if (NODE_ENV === 'dev') {
  passengerConfig.devtool = 'inline-cheap-module-source-map';
}

module.exports = passengerConfig;
