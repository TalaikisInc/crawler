import { open } from 'fs'
import { join } from 'path'

import write from './write'
const baseDir = join(__dirname, '../.data')

export default (dir, file, data, callback) => {
  open(join(baseDir, dir, `${file}.json`), 'wx', (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      const dataString = JSON.stringify(data)
      write(fileDescriptor, dataString, callback)
    } else {
      callback('Cannot create new file, it may exist already.')
    }
  })
}
