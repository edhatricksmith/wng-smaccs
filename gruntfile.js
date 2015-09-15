module.exports = function(grunt) {

    // Load NPM Plugins
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': false,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['index.html']
            }
        },

        uglify: {
            build: {
                files: {
                    'build/js/base.min.js': ['js/base.js']
                }
            }
        },

        cssc: {
            build: {
                options: {
                    consolidateViaDeclarations: true,
                    consolidateViaSelectors:    true,
                    consolidateMediaQueries:    true
                },
                files: {
                    'build/css/styles.min.css': 'build/css/styles.min.css'
                }
            }
        },

        cssmin: {
            build: {
                src: 'build/css/styles.min.css',
                dest: 'build/css/styles.min.css'
            }
        },

        sass: {
            build: {
                files: {
                    'build/css/styles.min.css': 'css/styles.scss'
                }
            }
        },

        watch: {
            html: {
                files: ['index.html'],
                tasks: ['htmlhint']
            },
            js: {
                files: ['js/base.js'],
                tasks: ['buildjs']
            },
            css: {
                files: ['css/**/*.scss'],
                tasks: ['buildcss']
            }
        }

    });

    // Default task(s).
    grunt.registerTask('default', []);

    grunt.registerTask('buildjs',  ['uglify']);
    grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);

};
