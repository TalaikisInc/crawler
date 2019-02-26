import { readdirSync } from 'fs'
import { join } from 'path'

import request from './utils/request'
import log from './utils/log'
import generateLinks from './utils/generateLinks'
import generateResources from './utils/generateResources'
import generate from './utils/generate'

const hosts = ['www.cuvva.com']
const baseDir = join(__dirname, './.data')

const stillWork = () => {
  return readdirSync(join(baseDir, 'links')).length >= 0
}

const loop = (host) => {
  const id = setInterval(() => {
    generateLinks(host, (err) => {
      if (err) {
        log(err)
      } else {
        generate(host)
      }
    })
  }, 1000 * 30)

  if (!stillWork()) {
    clearInterval(id)
  }
}

hosts.map((host) => {
  request('https:', host, 'GET', '/', (err) => {
    if (err) {
      log(err)
    } else {
      loop(host)
      generateResources()
    }
  })
})
