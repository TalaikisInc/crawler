import { readdir } from 'fs'
import { join } from 'path'

const baseDir = join(__dirname, '../.data')

export default (dir, callback) => {
  readdir(join(baseDir, dir), (err, data) => {
    if (!err && data && data.length > 0) {
      const trimmedFilename = []
      data.forEach((filename) => {
        if (filename.indexOf('.json') > -1) {
          trimmedFilename.push(filename.replace('.json', ''))
        }
      })
      callback(false, trimmedFilename)
    } else {
      callback(err, data)
    }
  })
}
