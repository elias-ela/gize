import { addDatetime, addMilliseconds, addSeconds } from '.'

import { EthiopicDatetime } from '../../Datetime/'
import { addDays, addFullYears, addHours, addMinutes, addMonths } from './Add'

describe('addDatetime', () => {
  test('should add years to a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 1, 1)
    const newEthiopicDatetime = addDatetime(ethiopicDatetime, {
      year: 100,
    })
    expect(newEthiopicDatetime.toLocaleDateString()).toBe(
      new EthiopicDatetime(2113, 1, 1).toLocaleDateString(),
    )
  })

  test('should add months (30 days) to a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 12, 1)
    const newEthiopicDatetime = addDatetime(ethiopicDatetime, {
      month: 1,
    })
    expect(newEthiopicDatetime.toLocaleDateString()).toBe(
      new EthiopicDatetime(2013, 13, 1).toLocaleDateString(),
    )
  })

  test('should add days to a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1)
    const newEthiopicDatetime = addDatetime(ethiopicDatetime, {
      day: 5,
    })
    expect(newEthiopicDatetime.toLocaleDateString()).toBe(
      new EthiopicDatetime(2014, 1, 1).toLocaleDateString(),
    )
  })

  test('should add days to a given date (accounting for leap year)', () => {
    const ethiopicDatetime = new EthiopicDatetime(2011, 13, 1)
    const newEthiopicDatetime = addDatetime(ethiopicDatetime, {
      day: 6,
    })
    expect(newEthiopicDatetime.toLocaleDateString()).toBe(
      new EthiopicDatetime(2012, 1, 1).toLocaleDateString(),
    )
  })

  test('should add hours to a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1)
    const newEthiopicDatetime = addDatetime(ethiopicDatetime, {
      hour: 24,
    })
    expect(newEthiopicDatetime.toLocaleDateString()).toBe(
      new EthiopicDatetime(2013, 13, 2).toLocaleDateString(),
    )
  })

  test('should add hours to a given date (accounting for leap year)', () => {
    const ethiopicDatetime = new EthiopicDatetime(2011, 13, 5)
    const newEthiopicDatetime = addDatetime(ethiopicDatetime, {
      hour: 48,
    })
    expect(newEthiopicDatetime.toLocaleDateString()).toBe(
      new EthiopicDatetime(2012, 1, 1).toLocaleDateString(),
    )
  })

  test('should add minutes to a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1)
    const newEthiopicDatetime = addDatetime(ethiopicDatetime, {
      minute: 1440,
    })
    expect(newEthiopicDatetime.toLocaleDateString()).toBe(
      new EthiopicDatetime(2013, 13, 2).toLocaleDateString(),
    )
  })

  test('should add minutes to a given date (accounting for leap year)', () => {
    const ethiopicDatetime = new EthiopicDatetime(2011, 13, 5)
    const newEthiopicDatetime = addDatetime(ethiopicDatetime, {
      minute: 2880,
    })
    expect(newEthiopicDatetime.toLocaleDateString()).toBe(
      new EthiopicDatetime(2012, 1, 1).toLocaleDateString(),
    )
  })

  test('should add seconds to a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1)
    const newEthiopicDatetime = addDatetime(ethiopicDatetime, {
      second: 86400,
    })
    expect(newEthiopicDatetime.toLocaleDateString()).toBe(
      new EthiopicDatetime(2013, 13, 2).toLocaleDateString(),
    )
  })

  test('should add seconds to a given date (accounting for leap year)', () => {
    const ethiopicDatetime = new EthiopicDatetime(2011, 13, 5)
    const newEthiopicDatetime = addDatetime(ethiopicDatetime, {
      second: 172800,
    })
    expect(newEthiopicDatetime.toLocaleDateString()).toBe(
      new EthiopicDatetime(2012, 1, 1).toLocaleDateString(),
    )
  })

  test('should add milliseconds to a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1)
    const newEthiopicDatetime = addDatetime(ethiopicDatetime, {
      millisecond: 86400000,
    })
    expect(newEthiopicDatetime.toLocaleDateString()).toBe(
      new EthiopicDatetime(2013, 13, 2).toLocaleDateString(),
    )
  })

  test('should add milliseconds to a given date (accounting for leap year)', () => {
    const ethiopicDatetime = new EthiopicDatetime(2011, 13, 5)
    const newEthiopicDatetime = addDatetime(ethiopicDatetime, {
      millisecond: 172800000,
    })
    expect(newEthiopicDatetime.toLocaleDateString()).toBe(
      new EthiopicDatetime(2012, 1, 1).toLocaleDateString(),
    )
  })
})

describe('addMilliseconds', () => {
  test('should add milliseconds to a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1, 1, 1, 1, 100)
    const newEthiopicDatetime = addMilliseconds(ethiopicDatetime, 250)
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2013, 13, 1, 1, 1, 1, 350).toISOString(),
    )
  })

  test('should add milliseconds to a given date (accounting for leap year)', () => {
    const ethiopicDatetime = new EthiopicDatetime(2011, 13, 5, 1, 1, 1, 100)
    const newEthiopicDatetime = addMilliseconds(ethiopicDatetime, 86400000)
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2011, 13, 6, 1, 1, 1, 100).toISOString(),
    )
  })

  test('should return NaN if wrong value is passed', () => {
    const ethiopicDatetime = new EthiopicDatetime()

    const withNaN = addMilliseconds(ethiopicDatetime, NaN)
    expect(withNaN.getTime()).toBeNaN()
  })
})

describe('addSeconds', () => {
  test('should add seconds to a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1, 1, 1, 10, 100)
    const newEthiopicDatetime = addSeconds(ethiopicDatetime, 10)
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2013, 13, 1, 1, 1, 20, 100).toISOString(),
    )
  })

  test('should add seconds to a given date (accounting for leap year)', () => {
    const ethiopicDatetime = new EthiopicDatetime(2011, 13, 5, 1, 1, 1, 100)
    const newEthiopicDatetime = addSeconds(ethiopicDatetime, 86400)
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2011, 13, 6, 1, 1, 1, 100).toISOString(),
    )
  })

  test('should return NaN if wrong value is passed', () => {
    const ethiopicDatetime = new EthiopicDatetime()

    const withNaN = addSeconds(ethiopicDatetime, NaN)
    expect(withNaN.getTime()).toBeNaN()
  })
})

describe('addMinute', () => {
  test('should add minute to a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1, 1, 1, 1, 100)
    const newEthiopicDatetime = addMinutes(ethiopicDatetime, 10)
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2013, 13, 1, 1, 11, 1, 100).toISOString(),
    )
  })

  test('should add minute to a given date (accounting for leap year)', () => {
    const ethiopicDatetime = new EthiopicDatetime(2011, 13, 5, 1, 1, 1, 100)
    const newEthiopicDatetime = addMinutes(ethiopicDatetime, 1440)
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2011, 13, 6, 1, 1, 1, 100).toISOString(),
    )
  })

  test('should return NaN if wrong value is passed', () => {
    const ethiopicDatetime = new EthiopicDatetime()

    const withNaN = addMinutes(ethiopicDatetime, NaN)
    expect(withNaN.getTime()).toBeNaN()
  })
})

describe('addHours', () => {
  test('should add hours to a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1, 1, 1, 1, 100)
    const newEthiopicDatetime = addHours(ethiopicDatetime, 10)
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2013, 13, 1, 11, 1, 1, 100).toISOString(),
    )
  })

  test('should add minute to a given date (accounting for leap year)', () => {
    const ethiopicDatetime = new EthiopicDatetime(2011, 13, 5, 1, 1, 1, 100)
    const newEthiopicDatetime = addHours(ethiopicDatetime, 24)
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2011, 13, 6, 1, 1, 1, 100).toISOString(),
    )
  })

  test('should return NaN if wrong value is passed', () => {
    const ethiopicDatetime = new EthiopicDatetime()

    const withNaN = addHours(ethiopicDatetime, NaN)
    expect(withNaN.getTime()).toBeNaN()
  })
})

describe('addDays', () => {
  test('should add days to a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1, 1, 1, 1, 100)
    const newEthiopicDatetime = addDays(ethiopicDatetime, 5)
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2014, 1, 1, 1, 1, 1, 100).toISOString(),
    )
  })

  test('should add days to a given date (accounting for leap year)', () => {
    const ethiopicDatetime = new EthiopicDatetime(2011, 13, 5, 1, 1, 1, 100)
    const newEthiopicDatetime = addDays(ethiopicDatetime, 1)
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2011, 13, 6, 1, 1, 1, 100).toISOString(),
    )
  })

  test('should return NaN if wrong value is passed', () => {
    const ethiopicDatetime = new EthiopicDatetime()

    const withNaN = addDays(ethiopicDatetime, NaN)
    expect(withNaN.getTime()).toBeNaN()
  })
})

describe('addMonths', () => {
  test('should add months (1 month = 30 days) to a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 13, 1, 1, 1, 1, 100)
    const newEthiopicDatetime = addMonths(ethiopicDatetime, 1)
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2014, 1, 26, 1, 1, 1, 100).toISOString(),
    )
  })

  test('should add months (1 month = 30 days) to a given date (accounting for leap year)', () => {
    const ethiopicDatetime = new EthiopicDatetime(2011, 13, 1, 1, 1, 1, 100)
    const newEthiopicDatetime = addMonths(ethiopicDatetime, 1)
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2012, 1, 25, 1, 1, 1, 100).toISOString(),
    )
  })

  test('should return NaN if wrong value is passed', () => {
    const ethiopicDatetime = new EthiopicDatetime()

    const withNaN = addMonths(ethiopicDatetime, NaN)
    expect(withNaN.getTime()).toBeNaN()
  })
})

describe('addFullYears', () => {
  test('should add full year (1 month = 30 days) to a given date', () => {
    const ethiopicDatetime = new EthiopicDatetime(2013, 1, 1, 1, 1, 1, 100)
    const newEthiopicDatetime = addFullYears(ethiopicDatetime, 1)
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2014, 1, 1, 1, 1, 1, 100).toISOString(),
    )
  })

  test('should add full year (1 month = 30 days) to a given date (accounting for leap year)', () => {
    const ethiopicDatetime = new EthiopicDatetime(2011, 13, 1, 1, 1, 1, 100)
    const newEthiopicDatetime = addFullYears(ethiopicDatetime, 1)
    expect(newEthiopicDatetime.toISOString()).toBe(
      new EthiopicDatetime(2012, 13, 1, 1, 1, 1, 100).toISOString(),
    )
  })

  test('should return NaN if wrong value is passed', () => {
    const ethiopicDatetime = new EthiopicDatetime()

    const withNaN = addFullYears(ethiopicDatetime, NaN)
    expect(withNaN.getTime()).toBeNaN()
  })
})
