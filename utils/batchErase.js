import erase from './erase'
import list from './list'
import log from './log'

export default (dir, cb) => {
  let fileCounter = 0
  list(dir, (err, files) => {
    if (!err && files) {
      files.map((i) => {
        fileCounter += 1
        erase(dir, i.replace('.json', ''), (err) => {
          if (err) {
            log(err)
          }
        })

        if (fileCounter === files.length) {
          cb(false)
        }
      })
    }
  })
}
