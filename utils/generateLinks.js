
import join from './join'
import clean from './clean'
import save from './save'
import log from './log'
import batchErase from './batchErase'

export default (host, cb) => {
  join('links', (data) => {
    if (data) {
      const cleaned = data.map((i) => clean('href', i))
      const uniq = Array.from(new Set(cleaned))
      const withHost = uniq.filter((i) => i.includes(host))
      const pathOnly = withHost.map((i) => i.replace(`https://${host}`, ''))

      save('output', 'links', pathOnly, (err) => {
        if (err) {
          cb(err)
        } else {
          batchErase('links', (err) => {
            if (err) {
              cb(err)
            } else {
              cb(false)
            }
          })
        }
      })
    }
  })
}
