
import join from './join'
import clean from './clean'
import save from './save'
import log from './log'
import batchErase from './batchErase'

export default () => {
  join('resources', (data) => {
    if (data) {
      const cleaned = data.map((i) => clean('src', i))
      const uniq = Array.from(new Set(cleaned))

      save('output', 'output', uniq, (err) => {
        if (err) {
          log(err)
        } else {
          batchErase('resources', (err) => {
            if (err) {
              log(err)
            }
          })
        }
      })
    }
  })
}
