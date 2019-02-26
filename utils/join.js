import list from './list'
import read from './read'

export default (dir, cb) => {
  let fileCounter = 0
  let out = []

  list(dir, (err, files) => {
    if (!err && files) {
      files.map((i) => {
        read(dir, i, (err, data) => {
          if (!err && data) {
            fileCounter += 1
            out = out.concat(data)
            if (fileCounter === files.length) {
              cb(out)
            }
          }
        })
      })
    }
  })
}
