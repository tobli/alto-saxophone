'use strict';

var os = require('os'),
  path = require('path'),
  version = require('./package').version;

module.exports.version = version;

module.exports.binPath = function() {
  var driverPath = path.resolve(__dirname, 'vendor', 'chromedriver');
  if (os.platform() === 'win32') {
    driverPath = driverPath + '.exe';
  }
  return driverPath;
};
