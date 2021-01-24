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

  test.skip('From datetime and configuration objects.', () => {
    const date = new EthiopicDatetime(
      { year: 2013, month: 4, day: 25 },
      { locale: 'en' },
    )
    expect(date).toBeInstanceOf(EthiopicDatetime)
    expect(date.toLocaleString()).toEqual('25/04/2013, 00:00:00 AM')
  })

  describe('Wth 1 parameter', () => {
    test('From milliseconds.', () => {
      const ms: number = 1609656443197 // Sun Jan 3, 2021
      const ED = new EthiopicDatetime(ms)
      expect(ED).toBeInstanceOf(EthiopicDatetime)
      expect(ED.toLocaleString()).toEqual('25/04/2013, 09:47:23 AM')
    })

    test.skip('From Date object.', () => {
      const d = new Date(2021, 1, 23, 3, 30, 20)
      const ED = new EthiopicDatetime(d)
      expect(ED).toBeInstanceOf(EthiopicDatetime)
      expect(ED.toLocaleString()).toEqual('15/05/2013, 03:30:20 AM')
    })

    test('From EthiopicDatetime object.', () => {
      const d = new EthiopicDatetime(2000, 1, 1, 5, 45, 30, 600)
      const ED = new EthiopicDatetime(d)
      expect(ED).toBeInstanceOf(EthiopicDatetime)
      expect(ED.toLocaleString()).toEqual('01/01/2000, 08:45:30 AM')
      expect(ED.getMilliseconds()).toEqual(600)
    })

    describe.skip('From Datetime object', () => {
      test('Y-M-D.', () => {
        const ED = new EthiopicDatetime({
          year: 2013,
          month: 4,
          day: 25,
        })
        expect(ED).toBeInstanceOf(EthiopicDatetime)
        expect(ED.toLocaleString()).toEqual('25/04/2013, 00:00:00 AM')
        expect(ED.getMilliseconds()).toEqual(0)
      })

      test('Y-M-D H:M:S.MS', () => {
        const ED = new EthiopicDatetime({
          year: 2013,
          month: 4,
          day: 25,
          hour: 4,
          minute: 30,
          second: 30,
          millisecond: 150,
        })
        expect(ED).toBeInstanceOf(EthiopicDatetime)
        expect(ED.toLocaleString()).toEqual('25/04/2013, 04:30:30 AM')
        expect(ED.getMilliseconds()).toEqual(150)
      })
    })

    describe.skip('From Configuration Object', () => {
      test('Empty Configuration object.', () => {
        const ED = new EthiopicDatetime({})
        const now = Date.now()
        expect(ED).toBeInstanceOf(EthiopicDatetime)
        expect(ED.getTime()).toEqual(now)
      })

      test('Passing only locale value.', () => {
        // TODO: need to check locality
        const ED = new EthiopicDatetime({ locale: 'en' })
        expect(ED).toBeInstanceOf(EthiopicDatetime)
      })

      test('Passing only 12 hour value.', () => {
        // TODO: need to check time
        const ED = new EthiopicDatetime({ hour12: false })
        const now = Date.now()
        expect(ED).toBeInstanceOf(EthiopicDatetime)
        expect(ED.getTime()).toEqual(now)
      })

      test('Passing both 12 hour and locale value.', () => {
        // TODO: need to check time and locality
        const ED = new EthiopicDatetime({
          locale: 'en',
          hour12: false,
        })
        const now = Date.now()
        expect(ED).toBeInstanceOf(EthiopicDatetime)
        expect(ED.getTime()).toEqual(now)
      })
    })
  })
})
