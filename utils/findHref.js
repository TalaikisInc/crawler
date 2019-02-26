export default (text) => {
  return [/\s(?:href)\s*=\s*("|').*?\1/ig, /\s(?:href)\s*=\s*[^"'\s][^\s>]+/ig].reduce((list, current) => {
    let resources

    if (current instanceof Function) {
      resources = current(text)
    } else {
      resources = text.match(current)
    }

    return resources ? list.concat(resources) : list
  }, [])
}
