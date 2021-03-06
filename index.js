const binarian = require('./binarian')
const fetch = require('node-fetch')
const VectorTile =
  require('@mapbox/vector-tile').VectorTile
const Pbf = require('pbf')

if (process.argv.length === 3) {
  const zxy = process.argv[2].split('/')
    .map(v => parseInt(v)).slice(-3)
  fetch(process.argv[2])
    .then(res => res.json())
    .then(json => {
      const vtbuf = binarian.convert(
        json, zxy[0], zxy[1], zxy[2]
      )
console.log(vtbuf)
      const vt = new VectorTile(new Pbf(vtbuf))
      //console.log(vt)
      const jsonSize = JSON.stringify(json).length
      const vtSize = vtbuf.length
      console.log(`${jsonSize} -> ${vtSize} (${Math.round(100.0 * vtSize / jsonSize)}%)`)
    })
}
