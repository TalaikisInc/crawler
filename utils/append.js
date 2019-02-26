import { appendFile } from 'fs'
import { join } from 'path'

const baseDir = join(__dirname, '../.data')

export default (dir, file, data, cb) => {
  appendFile(join(baseDir, dir, `${file}.json`), `${data}\n`, (err) => {
    if (err) {
      cb(err)
    } else {
      cb(false)
    }
  })
}
