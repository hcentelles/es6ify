'use strict';

var path       = require('path')
  , fs         = require('fs')
  , browserify = require('browserify')
  , es6ify     = require('..')
  , jsRoot     = path.join(__dirname, 'public', 'js')
  , bundlePath = path.join(jsRoot, 'bundle.js')
  ;

browserify({ debug: true })
  .add(es6ify.runtime)
  .transform(es6ify)
  .require(require.resolve('./src/main.js'), { entry: true })
  .bundle()
  .on('error', function (err) { console.error(err); })
  .pipe(fs.createWriteStream(bundlePath));

console.log('Please open the index.html inside example/public.');
