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
          "js/templates/songListTemplate.js": "templates/songListTemplate.hbs",
          "js/templates/overlayTemplate.js": "templates/overlayTemplate.hbs"

          // "path/to/another.js": ["path/to/sources/*.hbs", "path/to/more/*.hbs"]
        }
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        files: {                         // Dictionary of files
          'js/css/songListStyle.css': 'css/songListStyle.scss'       // 'destination': 'source'
        }
      }
    },
    watch: {
      scripts: {
        files: ['templates/*.hbs','css/*.scss'],
        tasks: ['handlebars','sass'],
        options: {
          spawn: false,
        },
      },
    }
  });

  // Load the plugin that provides the "uglify" task.

  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
