const path = require('path')
const glob = require('glob')

function sortConfigBy (attr) {
  return (a, b) => {
    if (a[attr] < b[attr]) return -1
    if (a[attr] > b[attr]) return 1
    return 0
  }
}

function capitalize (s) {
  return `${s.charAt(0).toUpperCase()}${s.slice(1)}`
}

glob(path.resolve(__dirname, '../src/pages/**/route.json'), (err, filenames) => {
  filenames
    .map(filename => require(filename))
    .sort(sortConfigBy('path'))
    .forEach(config => {
      console.log(`${capitalize(config.name)}: ${config.path}`)
    })
})
