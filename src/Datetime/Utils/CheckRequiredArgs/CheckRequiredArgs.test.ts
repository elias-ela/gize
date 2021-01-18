import { checkRequiredArgs } from '.'

describe('CheckRequiredArgs', () => {
  function zeroArgs() {
    checkRequiredArgs(arguments, 0)
    return ''
  }
  function twoArgs(value1: number, value2: number) {
    checkRequiredArgs(arguments, 2)
    return ''
  }
  test('should return nothing', () => {
    expect(zeroArgs()).toBe('')
    expect(twoArgs(1, 2)).toBe('')
  })
})
