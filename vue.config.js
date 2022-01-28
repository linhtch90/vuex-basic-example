// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
  // options...
  devServer: {
    proxy: 'http://localhost:7070'
  }
}