# Grunt + Browserify + Babelify

Run:

    
    > npm install
    > time grunt
    

Results:

    
    Running "browserify:dist" (browserify) task
    >> Bundle js/index.js created.
    
    Done, without errors.
    
    real    0m6.742s
    user    0m6.262s
    sys     0m0.546s
    

Ouch! Likewise...

    
    > time browserify index.js -o js/index.js -t [ babelify --presets [ es2015 ] ]
    
    real    0m5.398s
    user    0m5.025s
    sys     0m0.431s
    

What about Babel-CLI?

    
    > time node node_modules/babel-cli/bin/babel.js -o js/index.js --presets es2015 < index.js
    
    real    0m5.462s
    user    0m5.067s
    sys     0m0.456s
    
