module.exports = function( grunt ) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ";",
                stripBanners: true
            },
            libs:{
                src: [ "src/js/models/**/*.js", "src/js/viewModels/**/*.js" ],
                dest: "lib/js/scripts.js"
            },
            vendor: {
                options: {
                    stripBanners: false
                },
                src: [ "src/js/vendor/*.js" ],
                dest: "lib/js/vendor.js"
            }
        },
        jshint: {
            main: {
                options: {
                    jshintrc: ".jshintrc",
                    jshintignore: ".jshintignore"
                },
                files: {
                    src: ["src/**/*.js"]
                }
            }
        },
        uglify: {
            app: {
                files: {
                    "build/app-code.min.js": ["src/js/app.js", "src/**/*.js"]
                }
            },
            options: {
                sourceMap: true,
                sourceMapName: "build/app-code-source.map",
                sourceMapIncludeSources: true
            }
        },
        qunit: {
            search: ["specs/*.html"]
        },
        watch: {
            scripts: {
                files: ['src/**/*.js', 'specs/**/*.js'],
                tasks: ['jshint', "qunit"],
                options: {
                    spawn: false,
                }
            }
        }
    });

    grunt.loadNpmTasks( "grunt-contrib-concat" );
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-qunit");
    grunt.loadNpmTasks('grunt-contrib-watch');



    grunt.registerTask( "helloWorld", "Say hello", function() {
        grunt.log.write( "Hello World!" );
    });

    grunt.registerTask( "build", [ "jshint", "qunit", "concat:libs", "concat:vendor", "uglify" ]);

    grunt.registerTask( "default", [ "build" ] );
};