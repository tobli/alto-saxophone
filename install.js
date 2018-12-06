'use strict';

const Download = require('download'),
    os = require('os');

function getChromedriverUrl() {
  var urlBase;
  if (process.env.CHROMEDRIVER_BASE_URL) {
    urlBase = process.env.CHROMEDRIVER_BASE_URL;
  } else {
    urlBase = 'https://chromedriver.storage.googleapis.com/2.44/';
  }

  switch (os.platform()) {
    case 'darwin':
      return urlBase + 'chromedriver_mac64.zip';
    case 'linux':
      return urlBase + ((os.arch() === 'x64') ? 'chromedriver_linux64.zip' : 'chromedriver_linux32.zip');
    case 'win32':
      return urlBase + 'chromedriver_win32.zip';
    default:
      throw new Error('Unsupported platform: ' + os.platform());
  }
}

// There's no Chromedriver for ARM (Raspberry Pi) but we don't want to fail hard, instead just log
// so you have a chance to run Firefox only or fix the driver yourself
if (os.platform() === 'linux' && os.arch() === 'arm') {
  console.log('Skipping installing Chromedriver on ARM since there\'s no official build'); /* eslint-disable-line no-console */
} else {
  Download(getChromedriverUrl(), 'vendor', {extract: true});
}
