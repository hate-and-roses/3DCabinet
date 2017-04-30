module.exports = {
  images: {
    expand: true,
    cwd: 'src/i/',
    src: ['**/*.{png,jpg,svg}'],
    dest: 'build/i/'
  },
  fonts: {
    expand: true, 
    cwd: 'src/fonts/', 
    src: ['**/*.*'], 
    dest: 'build/fonts/' 
  }
}