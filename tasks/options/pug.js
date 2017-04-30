module.exports = {
  dist: { // Target
    files: [{
        expand: true,
        cwd: 'src/jade',
        src: ['{,*/**/*}*.jade'],
        dest: 'build/',
        ext: '.html'
      }]
  }
}