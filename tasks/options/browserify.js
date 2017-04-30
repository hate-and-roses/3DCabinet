module.exports = {
  dist: {
    options: {
      transform: [["babelify"]]
    },
    files: {
      "build/js/app.js": "src/js/app.js"
    }
  }
}