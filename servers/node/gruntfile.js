var serverJs = [
    "*.js",
    "routes/*.js",
    "controllers/*.js",
    "data/*.js",
    "models/*.js"
];

var clientJs = [
    "../../clients/ng/**/*.js"
];

var html = [
    "../../clients/index.html",
    "../../clients/ng/**/*.html"
];

module.exports = function(grunt) {

    grunt.initConfig({

        express: {
            dev: {
                options: {
                    script: "app.js"
                }
            }
        },

        jshint: {
            files: serverJs
        },

        watch: {

            options: {
                livereload: true
            },

            jshint: {
                files: serverJs.concat(clientJs),
                tasks: ["jshint"]
            },

            express: {
                files: serverJs,
                tasks: ["express:dev"],
                options: {
                    spawn: false
                }
            },

            html: {
                files: html
            }
        }
    });

    grunt.registerTask("default", ["express:dev", "watch"]);

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-express-server");
};