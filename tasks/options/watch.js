module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['src/js/**/*.js'],
    tasks: [  'browserify', 'uglify'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['src/scss/**/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    }
  },
  jade:{
    files: ['src/jade/**/*.jade'],
    tasks: ['pug'],
    options: {
      spawn: false
    }
  },
  copy:{
    files: ['src/i/**/*'],
    tasks: ['copy:images'],
    options: {
      spawn: false
    }
  }
}