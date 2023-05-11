export const formattedInteger = (value: number) => {
  if (value) {
    return String(value).replace(/(.)(?=(\d{3})+$)/g, '$1,')
  } else {
    return '0'
  }
}
