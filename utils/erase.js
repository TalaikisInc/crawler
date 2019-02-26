import { unlink } from 'fs'
import { join } from 'path'

const baseDir = join(__dirname, '../.data')

export default (dir, file, callback) => {
  unlink(join(baseDir, dir, `${file}.json`), (err) => {
    if (!err) {
      callback(false)
    } else {
      callback('Error deleting file.')
    }
  })
}
