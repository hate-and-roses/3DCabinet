module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'build/css/style.css': 'src/scss/style.scss'
    }
  }
}