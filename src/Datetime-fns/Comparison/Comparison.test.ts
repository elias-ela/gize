import {
  isEqual,
  isAfter,
  isAfterOrEqual,
  isBefore,
  isBeforeOrEqual,
  isBetween,
  min,
  max,
  isFuture,
  isPast,
  isSameDay,
  isToday,
  isWeekday,
  isWeekend,
  isYesterday,
  isSameMonth,
  isSameYear,
  isMonday,
  isTuesday,
  isWednesday,
  isThursday,
  isFriday,
  isSaturday,
  isSunday,
} from '.'
import { EthiopicDatetime } from '../../Datetime'

describe('isEqual', () => {
  test('should return true if the given dates are equal', () => {
    const response = isEqual(
      new EthiopicDatetime(1977, 1, 8),
      new EthiopicDatetime(1977, 1, 8),
    )
    expect(response).toBeTruthy()
  })

  test('should return false if the given dates are not equal', () => {
    const response = isEqual(
      new EthiopicDatetime(1999, 3, 4),
      new EthiopicDatetime(1988, 6, 7),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the first date is `Invalid EthiopicDatetime`', () => {
    const response = isEqual(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(1945, 6, 15),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the second date is `Invalid EthiopicDatetime`', () => {
    const response = isEqual(
      new EthiopicDatetime(1945, 6, 15),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if both dates are `Invalid EthiopicDatetime`', () => {
    const response = isEqual(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should throw TypeError exception if passed less than 2 arguments', () => {
    expect(isEqual.bind(null)).toThrow(TypeError)
  })
})

describe('isAfter', () => {
  test('should return true if the first date is after the second date', () => {
    const response = isAfter(
      new EthiopicDatetime(1979, 1, 8),
      new EthiopicDatetime(1977, 1, 8),
    )
    expect(response).toBeTruthy()
  })

  test('should return false if the second date is after the first date', () => {
    const response = isAfter(
      new EthiopicDatetime(1989, 3, 4),
      new EthiopicDatetime(1998, 6, 7),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the first date is `Invalid EthiopicDatetime`', () => {
    const response = isAfter(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(1945, 6, 15),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the second date is `Invalid EthiopicDatetime`', () => {
    const response = isAfter(
      new EthiopicDatetime(1945, 6, 15),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if both dates are `Invalid EthiopicDatetime`', () => {
    const response = isAfter(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should throw TypeError exception if passed less than 2 arguments', () => {
    expect(isAfter.bind(null)).toThrow(TypeError)
  })
})

describe('isAfterOrEqual', () => {
  test('should return true if the first date is after the second date', () => {
    const response = isAfterOrEqual(
      new EthiopicDatetime(1979, 1, 8),
      new EthiopicDatetime(1977, 1, 8),
    )
    expect(response).toBeTruthy()
  })

  test('should return true if the first date and the second date are equal', () => {
    const response = isAfterOrEqual(
      new EthiopicDatetime(1979, 1, 8),
      new EthiopicDatetime(1979, 1, 8),
    )
    expect(response).toBeTruthy()
  })

  test('should return true if the second date is after the first date', () => {
    const response = isAfterOrEqual(
      new EthiopicDatetime(1989, 3, 4),
      new EthiopicDatetime(1998, 6, 7),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the first date is `Invalid EthiopicDatetime`', () => {
    const response = isAfterOrEqual(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(1945, 6, 15),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the second date is `Invalid EthiopicDatetime`', () => {
    const response = isAfterOrEqual(
      new EthiopicDatetime(1945, 6, 15),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if both dates are `Invalid EthiopicDatetime`', () => {
    const response = isAfterOrEqual(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should throw TypeError exception if passed less than 2 arguments', () => {
    expect(isAfterOrEqual.bind(null)).toThrow(TypeError)
  })
})

describe('isBefore', () => {
  test('should return true if the first date is before the second date', () => {
    const response = isBefore(
      new EthiopicDatetime(1977, 1, 8),
      new EthiopicDatetime(1977, 1, 9),
    )
    expect(response).toBeTruthy()
  })

  test('should return false if the second date is before the first date', () => {
    const response = isBefore(
      new EthiopicDatetime(1989, 3, 4),
      new EthiopicDatetime(1988, 3, 3),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the first date is `Invalid EthiopicDatetime`', () => {
    const response = isBefore(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(1945, 6, 15),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the second date is `Invalid EthiopicDatetime`', () => {
    const response = isBefore(
      new EthiopicDatetime(1945, 6, 15),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if both dates are `Invalid EthiopicDatetime`', () => {
    const response = isBefore(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should throw TypeError exception if passed less than 2 arguments', () => {
    expect(isBefore.bind(null)).toThrow(TypeError)
  })
})

describe('isBeforeOrEqual', () => {
  test('should return true if the first date is before the second date', () => {
    const response = isBeforeOrEqual(
      new EthiopicDatetime(1977, 1, 7),
      new EthiopicDatetime(1977, 1, 8),
    )
    expect(response).toBeTruthy()
  })

  test('should return true if the first date and the second date are equal', () => {
    const response = isBeforeOrEqual(
      new EthiopicDatetime(1979, 1, 8),
      new EthiopicDatetime(1979, 1, 8),
    )
    expect(response).toBeTruthy()
  })

  test('should return true if the second date is before the first date', () => {
    const response = isBeforeOrEqual(
      new EthiopicDatetime(1989, 3, 7),
      new EthiopicDatetime(1988, 6, 4),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the first date is `Invalid EthiopicDatetime`', () => {
    const response = isBeforeOrEqual(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(1945, 6, 15),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the second date is `Invalid EthiopicDatetime`', () => {
    const response = isBeforeOrEqual(
      new EthiopicDatetime(1945, 6, 15),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if both dates are `Invalid EthiopicDatetime`', () => {
    const response = isBeforeOrEqual(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should throw TypeError exception if passed less than 2 arguments', () => {
    expect(isBeforeOrEqual.bind(null)).toThrow(TypeError)
  })
})

describe('isBetween', () => {
  test('should return true if the first date is greater than the second date and less than the third date', () => {
    const response = isBetween(
      new EthiopicDatetime(1977, 1, 8),
      new EthiopicDatetime(1977, 1, 7),
      new EthiopicDatetime(1977, 1, 9),
    )
    expect(response).toBeTruthy()
  })

  test('should return true if the first date is equal to the second date but less than the third date', () => {
    const response = isBetween(
      new EthiopicDatetime(1977, 1, 7),
      new EthiopicDatetime(1977, 1, 7),
      new EthiopicDatetime(1977, 1, 9),
    )
    expect(response).toBeTruthy()
  })

  test('should return true if the first date is greater than the second date but equal to the third date', () => {
    const response = isBetween(
      new EthiopicDatetime(1977, 1, 9),
      new EthiopicDatetime(1977, 1, 7),
      new EthiopicDatetime(1977, 1, 9),
    )
    expect(response).toBeTruthy()
  })

  test('should return true if all dates are the same', () => {
    const response = isBetween(
      new EthiopicDatetime(1977, 1, 9),
      new EthiopicDatetime(1977, 1, 9),
      new EthiopicDatetime(1977, 1, 9),
    )
    expect(response).toBeTruthy()
  })

  test('should return false if the first date is less than the second date', () => {
    const response = isBetween(
      new EthiopicDatetime(1977, 1, 6),
      new EthiopicDatetime(1977, 1, 7),
      new EthiopicDatetime(1977, 1, 9),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the first date is greater than the third date', () => {
    const response = isBetween(
      new EthiopicDatetime(1977, 1, 10),
      new EthiopicDatetime(1977, 1, 7),
      new EthiopicDatetime(1977, 1, 9),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the first date is `Invalid EthiopicDatetime`', () => {
    const response = isBetween(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(1945, 6, 16),
      new EthiopicDatetime(1945, 6, 17),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the second date is `Invalid EthiopicDatetime`', () => {
    const response = isBetween(
      new EthiopicDatetime(1945, 6, 15),
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(1945, 6, 17),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the third date is `Invalid EthiopicDatetime`', () => {
    const response = isBetween(
      new EthiopicDatetime(1945, 6, 15),
      new EthiopicDatetime(1945, 6, 16),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if all dates are `Invalid EthiopicDatetime`', () => {
    const response = isBetween(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should throw TypeError exception if passed less than 3 arguments', () => {
    expect(isBetween.bind(null)).toThrow(TypeError)
  })
})

describe('min', () => {
  test('returns the minimum date', () => {
    const response = min([
      new EthiopicDatetime(1999, 6, 10),
      new EthiopicDatetime(1997, 1, 11),
    ])
    expect(response).toStrictEqual(new EthiopicDatetime(1997, 1, 11))
  })

  test('accepts array with more than 2 entries', () => {
    const response = min([
      new EthiopicDatetime(1985, 6, 1),
      new EthiopicDatetime(1985, 6, 2),
      new EthiopicDatetime(1985, 6, 3),
      new EthiopicDatetime(1985, 6, 4),
      new EthiopicDatetime(1985, 6, 5),
      new EthiopicDatetime(1985, 6, 5),
    ])
    expect(response).toStrictEqual(new EthiopicDatetime(1985, 6, 1))
  })

  test('returns `Invalid Date` if any given date is invalid', () => {
    expect(
      min.bind([
        new EthiopicDatetime(1989, 6, 10),
        new EthiopicDatetime(NaN),
        new EthiopicDatetime(1987, 1, 11),
      ]),
    ).toThrow(TypeError)
  })

  test('returns throw TypeError if `Invalid Value` is passed', () => {
    expect(min.bind(new EthiopicDatetime(1985, 6, 1))).toThrow(TypeError)
  })

  test('returns throw TypeError for empty array', () => {
    expect(min.bind([])).toThrow(TypeError)
  })

  test('returns `Invalid Date` if given a non-iterable value', () => {
    expect(min.bind(undefined)).toThrow(TypeError)
  })

  test('throws TypeError exception if passed less than 1 argument', () => {
    expect(min.bind(null)).toThrow(TypeError)
  })
})

describe('max', () => {
  test('returns the maximum date', () => {
    const response = max([
      new EthiopicDatetime(1999, 6, 10),
      new EthiopicDatetime(1997, 1, 11),
    ])
    expect(response).toStrictEqual(new EthiopicDatetime(1999, 6, 10))
  })

  test('accepts array with more than 2 entries', () => {
    const response = max([
      new EthiopicDatetime(1985, 6, 1),
      new EthiopicDatetime(1985, 6, 2),
      new EthiopicDatetime(1985, 6, 3),
      new EthiopicDatetime(1985, 6, 4),
      new EthiopicDatetime(1985, 6, 5),
      new EthiopicDatetime(1985, 6, 5),
    ])
    expect(response).toStrictEqual(new EthiopicDatetime(1985, 6, 5))
  })

  test('returns `Invalid Date` if any given date is invalid', () => {
    expect(
      max.bind([
        new EthiopicDatetime(1989, 6, 10),
        new EthiopicDatetime(NaN),
        new EthiopicDatetime(1987, 1, 11),
      ]),
    ).toThrow(TypeError)
  })

  test('throw TypeError if `Invalid Value` is passed', () => {
    expect(max.bind(new EthiopicDatetime(1985, 6, 1))).toThrow(TypeError)
  })

  test('throw TypeError for empty array', () => {
    expect(max.bind([])).toThrow(TypeError)
  })

  test('throw `Invalid Date` if given a non-iterable value', () => {
    expect(max.bind(undefined)).toThrow(TypeError)
  })

  test('throw TypeError exception if passed less than 1 argument', () => {
    expect(max.bind(null)).toThrow(TypeError)
  })
})

describe('isWeekday', () => {
  test('should return true for weekdays', () => {
    const weekdays = [
      new EthiopicDatetime(2013, 1, 4),
      new EthiopicDatetime(2013, 1, 5),
      new EthiopicDatetime(2013, 1, 6),
      new EthiopicDatetime(2013, 1, 7),
      new EthiopicDatetime(2013, 1, 8),
    ]

    weekdays.forEach((weekday) => {
      expect(isWeekday(weekday)).toBeTruthy()
    })
  })

  test('should return false for weekends', () => {
    const weekends = [
      new EthiopicDatetime(2013, 1, 9),
      new EthiopicDatetime(2013, 1, 10),
    ]
    weekends.forEach((weekend) => {
      expect(isWeekday(weekend)).toBeFalsy()
    })
  })

  test('should return false if `Invalid EthiopicDatetime` is passed', () => {
    expect(isWeekday.bind(NaN)).toThrow(TypeError)
    expect(isWeekday.bind(undefined)).toThrow(TypeError)
  })

  test('should throw TypeError exception if passed less than 1 arguments', () => {
    expect(isWeekday.bind(null)).toThrow(TypeError)
  })
})

describe('isWeekend', () => {
  test('should return false for weekdays', () => {
    const weekdays = [
      new EthiopicDatetime(2013, 1, 4),
      new EthiopicDatetime(2013, 1, 5),
      new EthiopicDatetime(2013, 1, 6),
      new EthiopicDatetime(2013, 1, 7),
      new EthiopicDatetime(2013, 1, 8),
    ]

    weekdays.forEach((weekday) => {
      expect(isWeekend(weekday)).toBeFalsy()
    })
  })

  test('should return true for weekends', () => {
    const weekends = [
      new EthiopicDatetime(2013, 1, 9),
      new EthiopicDatetime(2013, 1, 10),
    ]
    weekends.forEach((weekend) => {
      expect(isWeekend(weekend)).toBeTruthy()
    })
  })

  test('should throw TypeError exception if `Invalid EthiopicDatetime` is passed', () => {
    expect(isWeekend.bind(NaN)).toThrow(TypeError)
    expect(isWeekend.bind(undefined)).toThrow(TypeError)
  })

  test('should throw TypeError exception if passed less than 1 arguments', () => {
    expect(isWeekend.bind(null)).toThrow(TypeError)
  })
})

describe('isToday', () => {
  test('should return true if the date is today', () => {
    const today = new EthiopicDatetime()
    expect(isToday(today)).toBeTruthy()
  })

  test('should return false if the date is other than today', () => {
    const notToday = new EthiopicDatetime(2012, 3, 5)
    expect(isToday(notToday)).toBeFalsy()
  })

  test('should return false if the date is `Invalid EthiopicDatetime`', () => {
    expect(isToday(new EthiopicDatetime(NaN))).toBeFalsy()
  })

  test('should throw TypeError exception if passed less than 1 arguments', () => {
    expect(isWeekend.bind(null)).toThrow(TypeError)
  })
})

describe('isPast', () => {
  test('should return true if the date is less than today', () => {
    expect(isPast(new EthiopicDatetime(2013, 5, 17))).toBeTruthy()
  })

  test('should return false if the date is greater than or equal to today', () => {
    expect(isPast(new EthiopicDatetime())).toBeFalsy()
    expect(isPast(new EthiopicDatetime(2013, 5, 19))).toBeFalsy()
  })

  test('should return false if the date is `Invalid EthiopicDatetime`', () => {
    expect(isPast(new EthiopicDatetime(NaN))).toBeFalsy()
  })

  test('should throw TypeError exception if passed less than 1 arguments', () => {
    expect(isPast.bind(null)).toThrow(TypeError)
  })
})

describe('isFuture', () => {
  test('should return true if the date is greater than today', () => {
    expect(isFuture(new EthiopicDatetime(2013, 5, 20))).toBeTruthy()
  })

  test('should return false if the date is less than or equal to today', () => {
    expect(isFuture(new EthiopicDatetime())).toBeFalsy()
    expect(isFuture(new EthiopicDatetime(2013, 5, 17))).toBeFalsy()
  })

  test('should return false if the date is `Invalid EthiopicDatetime`', () => {
    expect(isFuture(new EthiopicDatetime(NaN))).toBeFalsy()
  })

  test('should throw TypeError exception if passed less than 1 arguments', () => {
    expect(isFuture.bind(null)).toThrow(TypeError)
  })
})

describe('isYesterday', () => {
  test('should return true if the date is yesterday', () => {
    const today = new EthiopicDatetime(2013, 5, 17)
    expect(isYesterday(today)).toBeTruthy()
  })

  test('should return false if the date is other than yesterday', () => {
    const notToday = new EthiopicDatetime(2012, 3, 5)
    expect(isYesterday(notToday)).toBeFalsy()
  })

  test('should return false if the date is `Invalid EthiopicDatetime`', () => {
    expect(isYesterday(new EthiopicDatetime(NaN))).toBeFalsy()
  })

  test('should throw TypeError exception if passed less than 1 arguments', () => {
    expect(isYesterday.bind(null)).toThrow(TypeError)
  })
})

describe('isSameDay', () => {
  test('should return true if the given dates are equal', () => {
    const response = isSameDay(
      new EthiopicDatetime(1977, 1, 8),
      new EthiopicDatetime(1977, 1, 8),
    )
    expect(response).toBeTruthy()
  })

  test('should return false if the given dates are not equal', () => {
    const response = isSameDay(
      new EthiopicDatetime(1999, 3, 4),
      new EthiopicDatetime(1988, 6, 7),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the first date is `Invalid EthiopicDatetime`', () => {
    const response = isSameDay(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(1945, 6, 15),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the second date is `Invalid EthiopicDatetime`', () => {
    const response = isSameDay(
      new EthiopicDatetime(1945, 6, 15),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if both dates are `Invalid EthiopicDatetime`', () => {
    const response = isSameDay(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should throw TypeError exception if passed less than 2 arguments', () => {
    expect(isSameDay.bind(null)).toThrow(TypeError)
  })
})

describe('isSameMonth', () => {
  test('should return true if the given dates are in the same month', () => {
    const response = isSameMonth(
      new EthiopicDatetime(1977, 1, 28),
      new EthiopicDatetime(1977, 1, 8),
    )
    expect(response).toBeTruthy()
  })

  test('should return false if the given dates are not in the same month', () => {
    const response = isSameMonth(
      new EthiopicDatetime(1999, 3, 4),
      new EthiopicDatetime(1988, 6, 7),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the first date is `Invalid EthiopicDatetime`', () => {
    const response = isSameMonth(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(1945, 6, 15),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the second date is `Invalid EthiopicDatetime`', () => {
    const response = isSameMonth(
      new EthiopicDatetime(1945, 6, 15),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if both dates are `Invalid EthiopicDatetime`', () => {
    const response = isSameMonth(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should throw TypeError exception if passed less than 2 arguments', () => {
    expect(isSameMonth.bind(null)).toThrow(TypeError)
  })
})

describe('isSameYear', () => {
  test('should return true if the given dates are in the same year', () => {
    const response = isSameYear(
      new EthiopicDatetime(1977, 1, 28),
      new EthiopicDatetime(1977, 13, 4),
    )
    expect(response).toBeTruthy()
  })

  test('should return false if the given dates are not in the same year', () => {
    const response = isSameYear(
      new EthiopicDatetime(1999, 3, 4),
      new EthiopicDatetime(1988, 6, 7),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the first date is `Invalid EthiopicDatetime`', () => {
    const response = isSameYear(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(1945, 6, 15),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if the second date is `Invalid EthiopicDatetime`', () => {
    const response = isSameYear(
      new EthiopicDatetime(1945, 6, 15),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should return false if both dates are `Invalid EthiopicDatetime`', () => {
    const response = isSameYear(
      new EthiopicDatetime(NaN),
      new EthiopicDatetime(NaN),
    )
    expect(response).toBeFalsy()
  })

  test('should throw TypeError exception if passed less than 2 arguments', () => {
    expect(isSameYear.bind(null)).toThrow(TypeError)
  })
})

describe('isMonday', () => {
  test('should return true if the date is Monday', () => {
    expect(isMonday(new EthiopicDatetime(2013, 1, 4))).toBeTruthy()
  })

  test('should return false if the date is other than Monday', () => {
    const weekdays = [
      new EthiopicDatetime(2013, 1, 5),
      new EthiopicDatetime(2013, 1, 6),
      new EthiopicDatetime(2013, 1, 7),
      new EthiopicDatetime(2013, 1, 8),
      new EthiopicDatetime(2013, 1, 9),
      new EthiopicDatetime(2013, 1, 10),
    ]

    weekdays.forEach((weekday) => {
      expect(isMonday(weekday)).toBeFalsy()
    })
  })

  test('should throw TypeError exception if passed less than 1 arguments', () => {
    expect(isMonday.bind(null)).toThrow(TypeError)
  })
})

describe('isTuesday', () => {
  test('should return true if the date is Tuesday', () => {
    expect(isTuesday(new EthiopicDatetime(2013, 1, 5))).toBeTruthy()
  })

  test('should return false if the date is other than Tuesday', () => {
    const weekdays = [
      new EthiopicDatetime(2013, 1, 4),
      new EthiopicDatetime(2013, 1, 6),
      new EthiopicDatetime(2013, 1, 7),
      new EthiopicDatetime(2013, 1, 8),
      new EthiopicDatetime(2013, 1, 9),
      new EthiopicDatetime(2013, 1, 10),
    ]

    weekdays.forEach((weekday) => {
      expect(isTuesday(weekday)).toBeFalsy()
    })
  })

  test('should throw TypeError exception if passed less than 1 arguments', () => {
    expect(isTuesday.bind(null)).toThrow(TypeError)
  })
})

describe('isWednesday', () => {
  test('should return true if the date is Wednesday', () => {
    expect(isWednesday(new EthiopicDatetime(2013, 1, 6))).toBeTruthy()
  })

  test('should return false if the date is other than Wednesday', () => {
    const weekdays = [
      new EthiopicDatetime(2013, 1, 5),
      new EthiopicDatetime(2013, 1, 4),
      new EthiopicDatetime(2013, 1, 7),
      new EthiopicDatetime(2013, 1, 8),
      new EthiopicDatetime(2013, 1, 9),
      new EthiopicDatetime(2013, 1, 10),
    ]

    weekdays.forEach((weekday) => {
      expect(isWednesday(weekday)).toBeFalsy()
    })
  })

  test('should throw TypeError exception if passed less than 1 arguments', () => {
    expect(isWednesday.bind(null)).toThrow(TypeError)
  })
})

describe('isThursday', () => {
  test('should return true if the date is Thursday', () => {
    expect(isThursday(new EthiopicDatetime(2013, 1, 7))).toBeTruthy()
  })

  test('should return false if the date is other than Thursday', () => {
    const weekdays = [
      new EthiopicDatetime(2013, 1, 5),
      new EthiopicDatetime(2013, 1, 6),
      new EthiopicDatetime(2013, 1, 4),
      new EthiopicDatetime(2013, 1, 8),
      new EthiopicDatetime(2013, 1, 9),
      new EthiopicDatetime(2013, 1, 10),
    ]

    weekdays.forEach((weekday) => {
      expect(isThursday(weekday)).toBeFalsy()
    })
  })

  test('should throw TypeError exception if passed less than 1 arguments', () => {
    expect(isThursday.bind(null)).toThrow(TypeError)
  })
})

describe('isFriday', () => {
  test('should return true if the date is Friday', () => {
    expect(isFriday(new EthiopicDatetime(2013, 1, 8))).toBeTruthy()
  })

  test('should return false if the date is other than Friday', () => {
    const weekdays = [
      new EthiopicDatetime(2013, 1, 5),
      new EthiopicDatetime(2013, 1, 6),
      new EthiopicDatetime(2013, 1, 7),
      new EthiopicDatetime(2013, 1, 4),
      new EthiopicDatetime(2013, 1, 9),
      new EthiopicDatetime(2013, 1, 10),
    ]

    weekdays.forEach((weekday) => {
      expect(isFriday(weekday)).toBeFalsy()
    })
  })

  test('should throw TypeError exception if passed less than 1 arguments', () => {
    expect(isFriday.bind(null)).toThrow(TypeError)
  })
})

describe('isSaturday', () => {
  test('should return true if the date is Saturday', () => {
    expect(isSaturday(new EthiopicDatetime(2013, 1, 9))).toBeTruthy()
  })

  test('should return false if the date is other than Saturday', () => {
    const weekdays = [
      new EthiopicDatetime(2013, 1, 5),
      new EthiopicDatetime(2013, 1, 6),
      new EthiopicDatetime(2013, 1, 7),
      new EthiopicDatetime(2013, 1, 8),
      new EthiopicDatetime(2013, 1, 4),
      new EthiopicDatetime(2013, 1, 10),
    ]

    weekdays.forEach((weekday) => {
      expect(isSaturday(weekday)).toBeFalsy()
    })
  })

  test('should throw TypeError exception if passed less than 1 arguments', () => {
    expect(isSaturday.bind(null)).toThrow(TypeError)
  })
})

describe('isSunday', () => {
  test('should return true if the date is Sunday', () => {
    expect(isSunday(new EthiopicDatetime(2013, 1, 10))).toBeTruthy()
  })

  test('should return false if the date is other than Sunday', () => {
    const weekdays = [
      new EthiopicDatetime(2013, 1, 5),
      new EthiopicDatetime(2013, 1, 6),
      new EthiopicDatetime(2013, 1, 7),
      new EthiopicDatetime(2013, 1, 8),
      new EthiopicDatetime(2013, 1, 9),
      new EthiopicDatetime(2013, 1, 4),
    ]

    weekdays.forEach((weekday) => {
      expect(isSunday(weekday)).toBeFalsy()
    })
  })

  test('should throw TypeError exception if passed less than 1 arguments', () => {
    expect(isSunday.bind(null)).toThrow(TypeError)
  })
})
