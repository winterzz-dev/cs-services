const { configure, presets } = require('eslint-kit')

module.exports = configure({
  presets: [
    presets.node(),
    presets.imports(),
    presets.prettier(),
    presets.typescript(),
  ],
  extend: {
    rules: {
      'import-x/ no-unresolved': 'off'
    }
  }
})
