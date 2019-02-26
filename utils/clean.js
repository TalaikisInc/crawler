export default (type, text) => {
  return type === 'src' ? text.replace(' src=', '').replace(/("|')/g, '') : text.replace(' href=', '').replace(/("|')/g, '')
}
