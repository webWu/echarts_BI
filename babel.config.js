module.exports = {
  presets: [['@babel/preset-env', { modules: false }]],
  plugins: [
    [
      'component',
      {
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
