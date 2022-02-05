/// <binding AfterBuild='all' Clean='clean' ProjectOpened='watch' />
module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      all: [
        "wwwroot/lib/*",
        "wwwroot/css/*",
        "wwwroot/fonts/*",
        "wwwroot/img/*",
        "Assets/dist/",
      ],
    },
    concat: {
      all: {
        files: {
          "Assets/dist/combined.js": ["Assets/JavaScript/custom.js"],
          "Assets/dist/combined.css": ["Assets/StyleSheet/styles.css"],
        },
      },
    },
    copy: {
      all: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ["Assets/JavaScript/deps/**"],
            dest: "Assets/dist/deps/",
          },
          {
            expand: true,
            flatten: true,
            src: ["Assets/StyleSheet/deps/**"],
            dest: "Assets/dist/deps/",
          },
          {
            expand: true,
            cwd: "Assets/Fonts",
            src: ["**"],
            dest: "wwwroot/fonts/",
          },
          {
            expand: true,
            flatten: true,
            src: ["Assets/Images/**"],
            dest: "wwwroot/img/",
          },
          {
            expand: true,
            flatten: true,
            src: ["Assets/JavaScript/deps/**"],
            dest: "wwwroot/lib/deps/",
          },
          {
            expand: true,
            flatten: true,
            src: ["Assets/StyleSheet/deps/**"],
            dest: "wwwroot/css/deps/",
          },
        ],
      },
    },
    jshint: {
      files: ["Assets/dist/*.js"],
      options: {
        esversion: 6,
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
        },
        "-W069": false,
      },
    },
    uglify: {
      all: {
        src: ["Assets/dist/combined.js"],
        dest: "wwwroot/lib/combined.min.js",
      },
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1,
      },
      all: {
        files: {
          "wwwroot/css/combined.min.css": ["Assets/dist/combined.css"],
        },
      },
    },
    imagemin: {
      dynamic: {
        options: {
            optimizationLevel: 5,
        },
        files: [{
            expand: true,
            cwd: 'Assets/Images',
            src: ['**/*.{png,jpg,gif,svg}'],
            dest: 'wwwroot/img'
        }]
      }
    },
    watch: {
      files: ["Assets/JavaScript/*.js", "Assets/StyleSheet/*.css"],
      tasks: ["all"],
    },
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-imagemin");

  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("all", [
    "clean",
    "concat",
    "copy",
    "jshint",
    "uglify",
    "cssmin",
    "imagemin",
  ]);
};
