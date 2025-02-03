export const valueFormatter = function (value: any) {
  let formattedValue: string

  if (value >= 1000000000) {
    formattedValue = (value / 1000000000).toFixed(1)
    // Remove .00 if the number is an integer
    formattedValue = formattedValue.endsWith('.00')
      ? formattedValue.slice(0, -2)
      : formattedValue
    return formattedValue + 'b'
  } else if (value >= 1000000) {
    formattedValue = (value / 1000000).toFixed(1)
    // Remove .00 if the number is an integer
    formattedValue = formattedValue.endsWith('.00')
      ? formattedValue.slice(0, -2)
      : formattedValue
    return formattedValue + 'm'
  } else if (value >= 1000) {
    formattedValue = (value / 1000).toFixed(1)
    // Remove .00 if the number is an integer
    formattedValue = formattedValue.endsWith('.00')
      ? formattedValue.slice(0, -2)
      : formattedValue
    return formattedValue + 'k'
  } else {
    return value.toString() // Return the original value as a string
  }
}
