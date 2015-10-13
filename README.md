# Alto Saxophone - Chromedriver install

This is a simple package that downloads [Chromedriver](https://sites.google.com/a/chromium.org/chromedriver/) and 
provides a node api for accessing the path to the binary. There are other packages like this, but I wanted to make sure
I had an updated package to include in [Browsertime](http://www.browsertime.net).

Why the funny name you ask? Well, there are [countless](https://www.npmjs.com/search?q=selenium) Selenium modules in npm.
Keywords and the description for the module allows you to find it anyway, so might as well choose a unique name.

How to use?
```node
var driver = require('alto-saxophone').chromedriver;

var p = driver.binPath();
// launch chromedriver from path
```
