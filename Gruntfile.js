module.exports = function(grunt) {
  //initConfig method
  grunt.initConfig({
    browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '**/*.css',
                        '**/*.html',
                        '**/*.jade'
                    ]
                },
                options: {
                    watchTask: true,
                    server: '.'
                }
            }
        },
    sass: { // Task
      dist: { // Target

        files: { // Dictionary of files
          // 'destination': 'source'
          'style.css': 'style.scss'
        }
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: true
          }
        },
        files: {
          "index.html": ["index.jade"]
        }
      }
    },
    watch: {
      buil: {
        files: ['**/*.jade', '**/*.*css'],
        tasks: ['jade', 'wiredep', 'sass'],
        options: {
          livereload: true,
        },
      },
    },

    wiredep: {
      task: {
        // Point to the files that should be updated when
        // you run `grunt wiredep`
        src: [
          '**/*.html', // .html support...
          '**/*.jade', // .jade support...
        ],
        options: {
          // See wiredep's configuration documentation for the options
          // you may pass:
          // https://github.com/taptapship/wiredep#configuration
        }
      }
    }
  });

  //load tasks
  //wired task
  grunt.loadNpmTasks('grunt-wiredep');
  //Jade task
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  //browsrSync task
  grunt.loadNpmTasks('grunt-browser-sync');



  //register tasks
  grunt.registerTask('default', ['sass', 'jade','browserSync','watch']);
}
