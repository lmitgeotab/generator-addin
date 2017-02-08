# generator-addin
> Yeoman generator for MyGeotab/Geotab Drive Add-Ins

## Features
Leverage modern package managers.
  - [NPM](https://www.npmjs.com/)
  - [Bower](http://bower.io)

#### Features over Geotab/Generator-addin
Modified generator-addin/generators/app/index.js and generator-addin/generators/app/templates to

  - Support additional CSS files for Mygeotab and Geotab Drive
  - **api** and **state** function parameters added to Add-In global namespace
  - Index.html that demos best practice to add/remove event handlers on focus/blur
  - Additional helper scripts, like start_server.sh and build.sh
  - Adding of Geotab favicon.ico
  - 3-digit version numbering in config.json
  
#### Local Debugging
  - Run and debug the Add-In localy without having to add to Geotab database. MyGeotabApi mocks the API object passes to Add-In to make requests to your Geotab database.
  - Mock state - Drive add-in will try to use HTML5 features to mock Andoid/IOS device features (ex. Geoloaction)
  - Automagically lint your scripts
  - Built-in preview server with BrowserSync
  - The gulpfile makes use of [ES2015 features](https://babeljs.io/docs/learn-es2015/) by using [Babel](https://babeljs.io)
  
#### Release Build Process
  - Automagically lint your scripts
  - Minify, Obfuscate and Image optimization
  - Sandbox CSS as to not effect parent document CSS
  - Convert URLs to deployment location
  
#### Unit testing
  - Spec testing with [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/)
  - Functional testing with [Zombie.js](http://zombie.js.org/)

## Getting Started
- Install dependencies: `npm install -g yo gulp-cli bower`
- uninstall any other add-in generator: : `npm -g uninstall generator-addin`
  Otherwise Install the generator: `npm install -g https://github.com/lmitgeotab/generator-addin`
- Create a directory for your project `mkdir <projdir>`
- Change to your project `cd <projdir>`
- Run `yo addin` to scaffold your addin
- Run `gulp serve` to preview and watch for changes
- Run `bower install --save <package>` to install frontend dependencies
- Run `gulp test` to run the tests
- Run `gulp build` to build your addin for production

## Documentation
For information on MyGeotab and Geotab Drive Add-Ins or the MyGeotab API head over to the [MyGeotab SDK](https://my.geotab.com/sdk/default.html)

## License

Apache-2.0 © [Geotab Inc](https://geotab.com)


[npm-image]: https://badge.fury.io/js/generator-addin.svg
[npm-url]: https://npmjs.org/package/generator-addin
[travis-image]: https://travis-ci.org/geotab/generator-addin.svg?branch=master
[travis-url]: https://travis-ci.org/geotab/generator-addin
