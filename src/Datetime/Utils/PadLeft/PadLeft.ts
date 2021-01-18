export function padLeft(value: string | number, padding: string | number) {
  if (typeof padding === 'number') {
    if (value < 0 && value > -10) {
      return `-${
        Array(padding + 1).join('0') + Math.abs(parseInt(value.toString()))
      }`
    }
    return value >= 10 ? value : Array(padding + 1).join('0') + value
  }

  if (typeof padding === 'string') {
    return padding + value
  }

  throw new TypeError(`Expected string or number, got '${padding}'.`)
}
