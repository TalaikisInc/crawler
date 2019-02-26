import log from './log'
import request from './request'
import read from './read'
import append from './append'
import erase from './erase'

export default (host) => {
  read('output', 'links', (err, data) => {
    if (!err && data) {
      data.map((i) => {
        request('https:', host, 'GET', i, (err) => {
          if (err) {
            log(err)
          } else {
            append('parsed', 'parsed', i, (err) => {
              if (err) {
                log(err)
              }
            })
          }
        })
      })

      // @TODO erase only after we realy know that file processed and te=hen return callback
      erase('output', 'links', (err) => {
        if (err) {
          log(err)
        }
      })
    }
  })
}
