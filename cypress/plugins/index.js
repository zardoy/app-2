const { cypressEsbuildPreprocessor } = require('cypress-esbuild-preprocessor')
const path = require('path')

module.exports = (on, config) => {
    on('file:preprocessor', cypressEsbuildPreprocessor())
}
