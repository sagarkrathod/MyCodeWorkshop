module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    handlebars: {
      compile: {
        options: {
          namespace: false,
          amd:true
        },
        files: {
          "js/templates/signIn.js": "templates/signIn.hbs",
          "js/templates/forgotPassword.js": "templates/forgotPassword.hbs",

          // "path/to/another.js": ["path/to/sources/*.hbs", "path/to/more/*.hbs"]
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.hbs'],
        tasks: ['handlebars'],
        options: {
          spawn: false,
        },
      },
    }
  });

  // Load the plugin that provides the "uglify" task.

  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['handlebars']);

};
