const vtpbf = require('vt-pbf')
const geojsonvt = require('geojson-vt')
const stratify = require('./stratify.js')

module.exports = {
  convert: (geojson, z, x, y) => {
    return vtpbf.fromGeojsonVt(
      stratify(geojsonvt(geojson).getTile(z, x, y)), {version: 2}
    )
  }
}
