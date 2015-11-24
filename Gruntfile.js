module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        browserify: {
            dist: {
                src: 'index.js',
                dest: 'js/index.js',
                options: {
                    transform: [
                        ['babelify', {
                            presets: ['es2015']
                        }]
                    ]
                }
            }
        }
    });
    
    require('load-grunt-tasks')(grunt);
    
    grunt.registerTask('default', [
        'browserify',
    ]);
}
