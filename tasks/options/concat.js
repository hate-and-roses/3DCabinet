module.exports = {
  dist: {
    options: {
      sourceMap: true
    },
    src: [
      'src/js/plugins/*',
      'src/js/app.js'
    ],
    dest: 'build/js/app.js'
  }
}