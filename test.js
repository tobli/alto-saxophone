var cp = require('child_process'),
    semver = require('semver'),
    chromedriver = require('./'),
    package_version = require('./package.json').version;

var expected_version_prefix = 'ChromeDriver ' + semver.major(package_version) + '.' + semver.minor(package_version);

var driver_version = cp.execFileSync(chromedriver.binPath(), ['--version']).toString();

if (driver_version.indexOf(expected_version_prefix) !== 0) {
  throw new Error('Expected driver version to be ' + expected_version_prefix + ' but it was ' + driver_version);
}
