import { subDatetime } from '.'
import { EthiopicDatetime } from '../../Datetime'

describe('subDatetime', () => {
  test('should subtract Y-M-D-H-M-S-Ms from a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1, 1, 1, 1, 600)
    const newEthiopicDatetime = subDatetime(ethiopicDatetime, {
      year: 1,
      month: 1,
      day: 1,
      hour: 1,
      minute: 1,
      second: 1,
      millisecond: 600,
    })
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2012, 11, 30, 0, 0, 0, 0).toISOString(),
    )
  })

  test('should subtract years from a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 1, 1, 1, 1, 1, 100)
    const newEthiopicDatetime = subDatetime(ethiopicDatetime, {
      year: 10,
    })
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2003, 1, 1, 1, 1, 1, 100).toISOString(),
    )
  })

  test('should subtract months from a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 12, 1, 1, 1, 1, 100)
    const newEthiopicDatetime = subDatetime(ethiopicDatetime, {
      month: 1,
    })
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2013, 11, 1, 1, 1, 1, 100).toISOString(),
    )
  })

  test('should subtract days from a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 12, 11, 1, 1, 1, 100)
    const newEthiopicDatetime = subDatetime(ethiopicDatetime, {
      day: 10,
    })
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2013, 12, 1, 1, 1, 1, 100).toISOString(),
    )
  })

  test('should subtract hours from a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1, 11, 1, 1, 100)
    const newEthiopicDatetime = subDatetime(ethiopicDatetime, {
      hour: 10,
    })
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2013, 13, 1, 1, 1, 1, 100).toISOString(),
    )
  })

  test('should subtract minutes from a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1, 1, 22, 1, 100)
    const newEthiopicDatetime = subDatetime(ethiopicDatetime, {
      minute: 20,
    })
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2013, 13, 1, 1, 2, 1, 100).toISOString(),
    )
  })

  test('should subtract seconds from a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1, 1, 1, 50, 100)
    const newEthiopicDatetime = subDatetime(ethiopicDatetime, {
      second: 30,
    })
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2013, 13, 1, 1, 1, 20, 100).toISOString(),
    )
  })

  test('should subtract milliseconds from a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1, 1, 1, 1, 600)
    const newEthiopicDatetime = subDatetime(ethiopicDatetime, {
      millisecond: 400,
    })
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2013, 13, 1, 1, 1, 1, 200).toISOString(),
    )
  })

  describe('subtraction accounting for leap days', () => {
    test('should subtract years (365 days) from a given date', () => {
      const ethiopicDatetime = new EthiopicDatetime(2012, 2, 1, 1, 1, 1, 100)
      const newEthiopicDatetime = subDatetime(ethiopicDatetime, {
        year: 1,
      })
      expect(newEthiopicDatetime.toISOString()).toBe(
        new EthiopicDatetime(2011, 2, 1, 1, 1, 1, 100).toISOString(),
      )
    })

    test('should subtract milliseconds from a given date (accounting for leap year)', () => {
      const ethiopicDatetime = new EthiopicDatetime(2012, 1, 1, 1, 1, 1, 100)
      const newEthiopicDatetime = subDatetime(ethiopicDatetime, {
        millisecond: 172800000,
      })
      expect(newEthiopicDatetime.toISOString()).toBe(
        new EthiopicDatetime(2011, 13, 5, 1, 1, 1, 100).toISOString(),
      )
    })

    test('should subtract seconds from a given date (accounting for leap year)', () => {
      const ethiopicDatetime = new EthiopicDatetime(2012, 1, 1, 1, 1, 1, 100)
      const newEthiopicDatetime = subDatetime(ethiopicDatetime, {
        second: 86400,
      })
      expect(newEthiopicDatetime.toISOString()).toBe(
        new EthiopicDatetime(2011, 13, 6, 1, 1, 1, 100).toISOString(),
      )
    })

    test('should subtract months (30 days) from a given date (accounting for leap year)', () => {
      const ethiopicDatetime = new EthiopicDatetime(2012, 1, 25, 1, 1, 1, 100)
      const newEthiopicDatetime = subDatetime(ethiopicDatetime, {
        month: 1,
      })
      expect(newEthiopicDatetime.toISOString()).toBe(
        new EthiopicDatetime(2011, 13, 1, 1, 1, 1, 100).toISOString(),
      )
    })

    test('should subtract minutes from a given date (accounting for leap year)', () => {
      const ethiopicDatetime = new EthiopicDatetime(2012, 1, 1, 1, 1, 1, 100)
      const newEthiopicDatetime = subDatetime(ethiopicDatetime, {
        minute: 1440,
      })
      expect(newEthiopicDatetime.toISOString()).toBe(
        new EthiopicDatetime(2011, 13, 6, 1, 1, 1, 100).toISOString(),
      )
    })

    test('should subtract hours from a given date (accounting for leap year)', () => {
      const ethiopicDatetime = new EthiopicDatetime(2012, 1, 1, 1, 1, 1, 100)
      const newEthiopicDatetime = subDatetime(ethiopicDatetime, {
        hour: 24,
      })
      expect(newEthiopicDatetime.toISOString()).toBe(
        new EthiopicDatetime(2011, 13, 6, 1, 1, 1, 100).toISOString(),
      )
    })

    test('should subtract days from a given date (accounting for leap year)', () => {
      const ethiopicDatetime = new EthiopicDatetime(2012, 1, 1, 1, 1, 1, 100)
      const newEthiopicDatetime = subDatetime(ethiopicDatetime, {
        day: 1,
      })
      expect(newEthiopicDatetime.toISOString()).toBe(
        new EthiopicDatetime(2011, 13, 6, 1, 1, 1, 100).toISOString(),
      )
    })
  })
})
