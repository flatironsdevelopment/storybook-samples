const { startCase, camelCase } = require('lodash')

module.exports = (plop) => {
  plop.setHelper('capitalize', (text) => {
    return startCase(camelCase(text)).replace(/ /g, '')
  })

  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name:'
      }
    ],
    actions: [
      {
        type: 'addMany',
        templateFiles: 'component/**',
        destination: `../src/{{capitalize componentName}}`,
        base: 'component/',
        abortOnFail: true
      }
    ]
  })
}
