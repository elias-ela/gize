import {
  differenceInDays,
  differenceInHours,
  differenceInMilliseconds,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInYears,
} from '.'
import { EthiopicDatetime } from '../../Datetime/EthiopicDatetime'

describe('Difference', () => {
  describe('differenceInMilliseconds', () => {
    test('should return the millisecond difference between two dates', () => {
      expect(
        differenceInMilliseconds(
          new EthiopicDatetime(2013, 5, 18, 1, 56, 50, 120),
          new EthiopicDatetime(2013, 5, 18, 1, 56, 50, 240),
        ),
      ).toBe(120)
    })

    test('returns a positive number even if the time value of the first date is smaller', () => {
      expect(
        differenceInMilliseconds(
          new EthiopicDatetime(2013, 4, 30, 11, 4, 50, 688),
          new EthiopicDatetime(2013, 4, 30, 11, 4, 50, 588),
        ),
      ).toBe(-100)
    })
  })

  describe('differenceInSeconds', () => {
    test('should return the number of seconds between the two dates', () => {
      expect(
        differenceInSeconds(
          new EthiopicDatetime(2013, 5, 18, 1, 56, 20, 120),
          new EthiopicDatetime(2013, 5, 18, 1, 56, 50, 120),
        ),
      ).toBe(30)
    })
  })

  describe('differenceInMinutes', () => {
    test('should return the number of minutes between the two dates', () => {
      expect(
        differenceInMinutes(
          new EthiopicDatetime(2013, 5, 18, 1, 36, 50, 120),
          new EthiopicDatetime(2013, 5, 18, 1, 56, 50, 120),
        ),
      ).toBe(20)
    })
  })

  describe('differenceInHours', () => {
    test('should return the number of hours between the two dates', () => {
      expect(
        differenceInHours(
          new EthiopicDatetime(2013, 5, 18, 1, 56, 50, 120),
          new EthiopicDatetime(2013, 5, 18, 10, 56, 50, 120),
        ),
      ).toBe(9)
    })
  })

  describe('differenceInDays', () => {
    test('should return the number of days between the two dates', () => {
      expect(
        differenceInDays(
          new EthiopicDatetime(2013, 5, 8, 1, 56, 50, 120),
          new EthiopicDatetime(2013, 5, 18, 1, 56, 50, 120),
        ),
      ).toBe(10)
    })
  })

  describe('differenceInMonths', () => {
    test('should return the number of months between the two dates', () => {
      expect(
        differenceInMonths(
          new EthiopicDatetime(2013, 5, 18, 1, 56, 50, 120),
          new EthiopicDatetime(2013, 12, 18, 1, 56, 50, 120),
        ),
      ).toBe(7)
    })
  })

  describe('differenceInYears', () => {
    test('should return the number of years between the two dates', () => {
      expect(
        differenceInYears(
          new EthiopicDatetime(2000, 5, 18, 1, 56, 50, 120),
          new EthiopicDatetime(2013, 5, 18, 1, 56, 50, 120),
        ),
      ).toBe(13)
    })
  })
})
