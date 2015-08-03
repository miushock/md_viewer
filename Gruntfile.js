module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    copy: {
      scripts: {
        expand:true,
        cwd: './src',
        src: './*.js',
        dest: './test/scripts'
      },
      style_sheets: {
        expand:true,
        cwd: '.src',
        src: './*.css',
        dest: './test/style_sheets'
      }
    },
    build_index_page: {
      widget_html: "./src/md_viewer.html",
      container_file: "./template/container.html",
      dest: "./test/index.html"
    },
    submit_widget: {
      widget_html: "./src/md_viewer.html",
      widget_style: "./src/md_viewer.css",
      widget_script: "./src/md_viewer.js",
      name: '<%= pkg.name %>',
      author_email: "widget.moneky@freelog.co"
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('freelog-widgetscript');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-http');

  grunt.registerTask('default', ['jshint']);

};
