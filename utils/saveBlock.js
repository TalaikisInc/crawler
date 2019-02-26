import { stat } from 'fs'
import { join } from 'path'

import findHref from './findHref'
import findSrc from './findSrc'
import save from './save'
const baseDir = join(__dirname, '../.data')

export default (hostname, path, data, cb) => {
  const fileName = `${hostname}${path}`.replace(/(\/)/g, '---')
  const links = findHref(data)
  if (links && links.length > 0) {
    stat(join(baseDir, 'links', fileName), (err, _) => {
      if (err.code === 'ENOENT') {
        save('links', fileName, links, async (err) => {
          if (!err) {
            const resources = findSrc(data)
            if (resources && resources.length > 0) {
              save('resources', fileName, resources, (err) => {
                if (!err) {
                  cb(false)
                } else {
                  cb(err)
                }
              })
            }
          }
        })
      } else {
        cb(err)
      }
    })
  }
}
