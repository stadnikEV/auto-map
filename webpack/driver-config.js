const path = require('path');
const commonConfig = require('./common-config');
const cloneDeep = require('lodash.clonedeep');
const routes = require('../webpack-static-server/routes');

const NODE_ENV = process.env.NODE_ENV || 'dev';

const driverConfig = cloneDeep(commonConfig);

driverConfig.entry = {
  driver: './src/app-driver.js',
};

driverConfig.output = {
  filename: '[name].js',
  chunkFilename: '[name].js',
  publicPath: 'http://localhost:3000/',
  path: path.join(__dirname, '../dist'),
};

driverConfig.module.rules.push({
  enforce: 'pre',
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'set-app-name-driver',
});

if (NODE_ENV === 'dev') {
  driverConfig.watch = true;
  driverConfig.devtool = 'inline-cheap-module-source-map';
  driverConfig.devServer = {
    inline: true,
    port: 3000,
    contentBase: path.join(__dirname, 'dist/'),
    setup: (app) => {
      routes(app);
    },
  };
}

module.exports = driverConfig;
