
module.exports = function(grunt) {

    grunt.initConfig({

        ozma: {
            main: {
                saveConfig: false,
                src: 'src/main.js',
                config: {
                    "baseUrl": "src/",
                    "distUrl": "dist/",
                    "disableAutoSuffix": true,
                    "loader": "lib/oz.min.js"
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-ozjs');

    grunt.registerTask('default', [
        'ozma'
    ]);

};
