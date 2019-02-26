import http from 'http'
import https from 'https'

import saveBlock from './saveBlock'

export default (protocol, hostname, method, path, cb) => {
  const schema = typeof protocol === 'string' && protocol === 'http:' ? http : https
  const obj = {
    protocol,
    hostname,
    method,
    path: encodeURI(path)
  }

  const req = schema.request(obj, (res) => {
    let data = ''
    res.on('data', (chunk) => {
      data += chunk
    })

    res.on('end', () => {
      saveBlock(hostname, path, data, (err) => {
        if (!err) {
          cb(false)
        }
      })
    })
  })

  req.on('error', (err) => {
    cb(err.message)
  })

  req.on('timeout', () => {
    cb('Request timed out.')
  })

  req.end()
}
