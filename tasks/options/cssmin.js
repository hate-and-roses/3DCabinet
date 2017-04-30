module.exports = {
  combine: {
    options: {
      sourceMap: true
    },
    files: {
      'build/css/style.min.css': ['build/css/style.css']
    }
  }
}