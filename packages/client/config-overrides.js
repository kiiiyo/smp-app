/* eslint-disable @typescript-eslint/no-var-requires */
const {
  override,
  addWebpackResolve,
  addBabelPresets,
  addBabelPlugins
} = require('customize-cra')
const path = require('path')

module.exports = override(
  addBabelPresets(['@babel/preset-react']),
  addBabelPlugins(['@emotion/babel-plugin']),
  addWebpackResolve({
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  })
)
