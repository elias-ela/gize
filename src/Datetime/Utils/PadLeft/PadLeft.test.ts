import { padLeft } from '.'

describe('PadLeft', () => {
  test('when value and padding are strings', () => {
    expect(padLeft('5', '00')).toEqual('005')
  })

  test('when value and padding are numbers', () => {
    expect(padLeft(5, 2)).toEqual('005')
  })

  test('when value is string and padding is number', () => {
    expect(padLeft('5', 2)).toEqual('005')
  })

  test('when value is number and padding is string', () => {
    expect(padLeft(5, '00')).toEqual('005')
  })

  describe('Test for edge cases', () => {
    test('when value is 10', () => {
      expect(padLeft(10, 2)).toEqual(10)
    })

    test('when value is negative', () => {
      expect(padLeft(-5, 2)).toEqual('-005')
    })

    test('when value is zero', () => {
      expect(padLeft(0, 2)).toEqual('000')
    })

    test('when padding is zero', () => {
      expect(padLeft(5, 0)).toEqual('5')
    })
  })
})
