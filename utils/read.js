import { readFile } from 'fs'
import { join } from 'path'

const baseDir = join(__dirname, '../.data')

export default (dir, file, callback) => {
  readFile(join(baseDir, dir, `${file}.json`), 'utf8', (err, data) => {
    if (!err && data) {
      callback(false, JSON.parse(data))
    } else {
      callback(err)
    }
  })
}
