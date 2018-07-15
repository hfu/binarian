const vtpbf = require('vt-pbf')
const geojsonvt = require('geojson-vt')

module.exports = {
  convert: (geojson, z, x, y, layerName) => {
    let o = {}
    o[layerName] = geojsonvt(
      geojson
    ).getTile(z, x, y)
    return vtpbf.fromGeojsonVt(o, {version: 2})
  }
}
