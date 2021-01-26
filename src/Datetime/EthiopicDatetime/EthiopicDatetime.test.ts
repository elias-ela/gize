import { EthiopicDatetime } from '.'

describe('Creates instance of EthiopicDatetime', () => {
  test('From nothing.', () => {
    const ED = new EthiopicDatetime()
    const now = Date.now()
    expect(ED).toBeInstanceOf(EthiopicDatetime)
    expect(ED.getTime()).toEqual(now)
  })

  test('From year, month, and day.', () => {
    // TODO: hour should be 00 and millisecond should be 000
    const ED = new EthiopicDatetime(2000, 1, 1)
    expect(ED).toBeInstanceOf(EthiopicDatetime)
    expect(ED.toLocaleString()).toEqual('01/01/2000, 03:00:00 AM')
  })

  test('From year, month, day, hour, minute, second, and millisecond.', () => {
    const ED = new EthiopicDatetime(2000, 1, 1, 5, 45, 30, 600)
    expect(ED).toBeInstanceOf(EthiopicDatetime)
    expect(ED.toLocaleString()).toEqual('01/01/2000, 08:45:30 AM')
    expect(ED.getMilliseconds()).toEqual(600)
  })

  describe('Wth 1 parameter', () => {
    test('From milliseconds.', () => {
      const ms: number = 1609656443197 // Sun Jan 3, 2021
      const ED = new EthiopicDatetime(ms)
      expect(ED).toBeInstanceOf(EthiopicDatetime)
      expect(ED.toLocaleString()).toEqual('25/04/2013, 09:47:23 AM')
    })

    test('From EthiopicDatetime object.', () => {
      const d = new EthiopicDatetime(2000, 1, 1, 5, 45, 30, 600)
      const ED = new EthiopicDatetime(d)
      expect(ED).toBeInstanceOf(EthiopicDatetime)
      expect(ED.toLocaleString()).toEqual('01/01/2000, 08:45:30 AM')
      expect(ED.getMilliseconds()).toEqual(600)
    })
  })
})
