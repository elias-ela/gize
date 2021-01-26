import { EthiopicDatetime } from '../../Datetime'
import { checkRequiredArgs, weekdays } from '../../Datetime/Utils'
import { subDatetime } from '../Sub'
import { addDays } from '../Add'

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 *
 * @param {Date} dateLeft - the first date to compare
 * @param {Date} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are ሰኞ ጥር 17 2013 03:12:23.000 and ሰኞ ጥር 17 2013 03:12:23.287 equal?
 * const res = isEqual(
 *   new EthiopicDatetime(2013, 5, 17, 3, 12, 23, 0),
 *   new EthiopicDatetime(2013, 5, 17, 3, 12, 23, 287)
 * )
 * //=> false
 */
export function isEqual(
  dirtyDateLeft: EthiopicDatetime,
  dirtyDateRight: EthiopicDatetime,
): boolean {
  checkRequiredArgs(arguments, 2)

  const dateLeft = new EthiopicDatetime(dirtyDateLeft.getTime())
  const dateRight = new EthiopicDatetime(dirtyDateRight.getTime())

  return dateLeft.getTime() === dateRight.getTime()
}

export function isAfter(
  dirtyDate: EthiopicDatetime,
  dirtyDateToCompare: EthiopicDatetime,
): boolean {
  checkRequiredArgs(arguments, 2)

  const date = new EthiopicDatetime(dirtyDate.getTime())
  const dateToCompare = new EthiopicDatetime(dirtyDateToCompare.getTime())

  return date.getTime() > dateToCompare.getTime()
}

export function isAfterOrEqual(
  dirtyDate: EthiopicDatetime,
  dirtyDateToCompare: EthiopicDatetime,
): boolean {
  checkRequiredArgs(arguments, 2)

  const date = new EthiopicDatetime(dirtyDate.getTime())
  const dateToCompare = new EthiopicDatetime(dirtyDateToCompare.getTime())

  return date.getTime() >= dateToCompare.getTime()
}

export function isBefore(
  dirtyDate: EthiopicDatetime,
  dirtyDateToCompare: EthiopicDatetime,
): boolean {
  checkRequiredArgs(arguments, 2)

  const date = new EthiopicDatetime(dirtyDate.getTime())
  const dateToCompare = new EthiopicDatetime(dirtyDateToCompare.getTime())

  return date.getTime() < dateToCompare.getTime()
}

export function isBeforeOrEqual(
  dirtyDate: EthiopicDatetime,
  dirtyDateToCompare: EthiopicDatetime,
): boolean {
  checkRequiredArgs(arguments, 2)

  const date = new EthiopicDatetime(dirtyDate.getTime())
  const dateToCompare = new EthiopicDatetime(dirtyDateToCompare.getTime())

  return date.getTime() <= dateToCompare.getTime()
}

export function isBetween(
  dirtyDateToCompare: EthiopicDatetime,
  dirtyDateLeft: EthiopicDatetime,
  dirtyDateRight: EthiopicDatetime,
) {
  checkRequiredArgs(arguments, 3)

  const dateToCompare = new EthiopicDatetime(dirtyDateToCompare.getTime())
  const dateLeft = new EthiopicDatetime(dirtyDateLeft.getTime())
  const dateRight = new EthiopicDatetime(dirtyDateRight.getTime())

  return (
    dateToCompare.getTime() >= dateLeft.getTime() &&
    dateToCompare.getTime() <= dateRight.getTime()
  )
}

export function min(dirtyDates: EthiopicDatetime[]): EthiopicDatetime {
  checkRequiredArgs(arguments, 1)

  if (!dirtyDates && !Array.isArray(dirtyDates)) {
    throw new TypeError(`Expected an array, ${arguments} provided.`)
  }

  const dates: EthiopicDatetime[] = []
  dirtyDates.forEach((dirtyDate) => {
    if (dirtyDate.getTime() === undefined || isNaN(dirtyDate.getTime()))
      throw new TypeError(`Invalid EthiopicDatetime: ${dirtyDate}`)
    dates.push(new EthiopicDatetime(dirtyDate.getTime()))
  })

  let response = dates[0]

  dates.forEach((date) => {
    if (date.getTime() < response.getTime()) response = date
  })

  return new EthiopicDatetime(response.getTime())
}

export function max(dirtyDates: EthiopicDatetime[]): EthiopicDatetime {
  checkRequiredArgs(arguments, 1)

  if (!dirtyDates && !Array.isArray(dirtyDates)) {
    throw new TypeError(`Expected an array, ${arguments} provided.`)
  }

  const dates: EthiopicDatetime[] = []
  dirtyDates.forEach((dirtyDate) => {
    if (dirtyDate.getTime() === undefined || isNaN(dirtyDate.getTime()))
      throw new TypeError(`Invalid EthiopicDatetime: ${dirtyDate}`)
    dates.push(new EthiopicDatetime(dirtyDate.getTime()))
  })

  let response = dates[0]

  dates.forEach((date) => {
    if (date.getTime() > response.getTime()) response = date
  })

  return new EthiopicDatetime(response.getTime())
}

export function isYesterday(dirtyDate: EthiopicDatetime): boolean {
  checkRequiredArgs(arguments, 1)
  const yesterday = subDatetime(new EthiopicDatetime(), {
    day: 1,
  }).setDatetime({ hour: 0, minute: 0, second: 0, millisecond: 0 })

  const date = new EthiopicDatetime(dirtyDate.getTime()).setDatetime({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  })

  return yesterday.getTime() === date.getTime()
}

export function isToday(dirtyDate: EthiopicDatetime): boolean {
  checkRequiredArgs(arguments, 1)
  const today = new EthiopicDatetime().setDatetime({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  })
  const date = new EthiopicDatetime(dirtyDate.getTime()).setDatetime({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  })

  return today.getTime() === date.getTime()
}

export function isTomorrow(dirtyDate: EthiopicDatetime): boolean {
  checkRequiredArgs(arguments, 1)
  const tomorrow = addDays(new EthiopicDatetime(), 1).setDatetime({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  })

  const date = new EthiopicDatetime(dirtyDate.getTime()).setDatetime({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  })

  return tomorrow.getTime() === date.getTime()
}

export function isPast(dirtyDate: EthiopicDatetime): boolean {
  checkRequiredArgs(arguments, 1)
  const today = new EthiopicDatetime().setDatetime({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  })
  const date = new EthiopicDatetime(dirtyDate.getTime()).setDatetime({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  })

  const diff = today.getTime() - date.getTime()

  return diff >= 86400000
}

export function isFuture(dirtyDate: EthiopicDatetime): boolean {
  checkRequiredArgs(arguments, 1)
  const today = new EthiopicDatetime().setDatetime({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  })
  const date = new EthiopicDatetime(dirtyDate.getTime()).setDatetime({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  })
  const diff = date.getTime() - today.getTime()

  const oneDayInMilliseconds = 1000 * 60 * 60 * 24
  return diff > oneDayInMilliseconds
}

export function isSameDay(
  dirtyDateLeft: EthiopicDatetime,
  dirtyDateRight: EthiopicDatetime,
): boolean {
  checkRequiredArgs(arguments, 2)

  const dateLeft = new EthiopicDatetime(dirtyDateLeft.getTime()).setDatetime({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  })
  const dateRight = new EthiopicDatetime(dirtyDateRight.getTime()).setDatetime({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  })

  const diff = Math.abs(dateRight.getTime() - dateLeft.getTime())

  return diff === 0
}

export function isSameYear(
  dirtyDateLeft: EthiopicDatetime,
  dirtyDateRight: EthiopicDatetime,
): boolean {
  checkRequiredArgs(arguments, 2)

  const dateLeft = new EthiopicDatetime(dirtyDateLeft.getTime()).setDatetime({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  })
  const dateRight = new EthiopicDatetime(dirtyDateRight.getTime()).setDatetime({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  })

  const diff = Math.abs(dateLeft.getFullYear() - dateRight.getFullYear())

  return diff === 0
}

export function isSameMonth(
  dirtyDateLeft: EthiopicDatetime,
  dirtyDateRight: EthiopicDatetime,
): boolean {
  checkRequiredArgs(arguments, 2)

  const dateLeft = new EthiopicDatetime(dirtyDateLeft.getTime()).setDatetime({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  })
  const dateRight = new EthiopicDatetime(dirtyDateRight.getTime()).setDatetime({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  })

  if (Math.abs(dateLeft.getFullYear() - dateRight.getFullYear()) !== 0) {
    return false
  }

  const diff = Math.abs(dateRight.getMonth() - dateLeft.getMonth())

  return diff === 0
}

export function isWeekday(dirtyDate: EthiopicDatetime): boolean {
  checkRequiredArgs(arguments, 1)
  const date = new EthiopicDatetime(dirtyDate.getTime())
  if (date.getTime === undefined || isNaN(date.getTime()))
    throw new TypeError(`Expected EthiopicDatetime, ${arguments[0]} provided.`)

  // 6 is Saturday and 0 is Sunday
  return !(
    date.getDay() === weekdays.SATURDAY || date.getDay() === weekdays.SUNDAY
  )
}

export function isWeekend(dirtyDate: EthiopicDatetime): boolean {
  checkRequiredArgs(arguments, 1)
  const date = new EthiopicDatetime(dirtyDate.getTime())
  return !isWeekday(date)
}

export function isMonday(dirtyDate: EthiopicDatetime): boolean {
  checkRequiredArgs(arguments, 1)

  const date = new EthiopicDatetime(dirtyDate.getTime())

  return date.getDay() === weekdays.MONDAY
}

export function isTuesday(dirtyDate: EthiopicDatetime): boolean {
  checkRequiredArgs(arguments, 1)

  const date = new EthiopicDatetime(dirtyDate.getTime())

  return date.getDay() === weekdays.TUESDAY
}

export function isWednesday(dirtyDate: EthiopicDatetime): boolean {
  checkRequiredArgs(arguments, 1)

  const date = new EthiopicDatetime(dirtyDate.getTime())

  return date.getDay() === weekdays.WEDNESDAY
}

export function isThursday(dirtyDate: EthiopicDatetime): boolean {
  checkRequiredArgs(arguments, 1)

  const date = new EthiopicDatetime(dirtyDate.getTime())

  return date.getDay() === weekdays.THURSDAY
}

export function isFriday(dirtyDate: EthiopicDatetime): boolean {
  checkRequiredArgs(arguments, 1)

  const date = new EthiopicDatetime(dirtyDate.getTime())

  return date.getDay() === weekdays.FRIDAY
}

export function isSaturday(dirtyDate: EthiopicDatetime): boolean {
  checkRequiredArgs(arguments, 1)

  const date = new EthiopicDatetime(dirtyDate.getTime())

  return date.getDay() === weekdays.SATURDAY
}

export function isSunday(dirtyDate: EthiopicDatetime): boolean {
  checkRequiredArgs(arguments, 1)

  const date = new EthiopicDatetime(dirtyDate.getTime())

  return date.getDay() === weekdays.SUNDAY
}
