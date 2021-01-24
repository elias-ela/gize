import { EthiopicDatetime } from '../../Datetime'
import { Datetime } from '../../Datetime/Interfaces'
import { checkRequiredArgs } from '../../Datetime/Utils/CheckRequiredArgs'

/**
 *
 * @param dirtyDate EthiopicDatetime
 * @param ms number
 */
export function addMilliseconds(
  dirtyDate: EthiopicDatetime,
  millisecond: number,
): EthiopicDatetime {
  checkRequiredArgs(arguments, 2)
  const date = new EthiopicDatetime(dirtyDate.getTime())
  const ms = date.getMilliseconds() + Number(millisecond)
  return date.setMilliseconds(ms)
}
/**
 *
 * @param dirtyDate EthiopicDatetime
 * @param sec number
 * @param ms [optional] number
 */
export function addSeconds(
  dirtyDate: EthiopicDatetime,
  second: number,
  millisecond?: number,
): EthiopicDatetime {
  checkRequiredArgs(arguments, 2)

  // sec = Number(sec) + date.getSeconds()
  // ms = Number(ms) + date.getMilliseconds()
  return addDatetime(dirtyDate, { second, millisecond })
}
/**
 *
 * @param date EthiopicDatetime
 * @param min Number
 * @param sec Number
 * @param ms Number
 */
export function addMinutes(
  date: EthiopicDatetime,
  minute?: number,
  second?: number,
  millisecond?: number,
): EthiopicDatetime {
  checkRequiredArgs(arguments, 2)
  // min = Number(min) + date.getMinutes()
  // sec = Number(sec) + date.getSeconds()
  // ms = Number(ms) + date.getMilliseconds()
  return addDatetime(date, { minute, second, millisecond })
}
/**
 *
 * @param date EthiopicDatetime
 * @param hour Number
 * @param minute Number
 * @param second Number
 * @param millisecond Number
 */
export function addHours(
  date: EthiopicDatetime,
  hour: number,
  minute?: number,
  second?: number,
  millisecond?: number,
): EthiopicDatetime {
  checkRequiredArgs(arguments, 2)
  // hours = Number(hours) + date.getHours()
  // min = Number(min) + date.getMinutes()
  // sec = Number(sec) + date.getSeconds()
  // ms = Number(ms) + date.getMilliseconds()
  return addDatetime(date, { hour, minute, second, millisecond })
}
/**
 *
 * @param date EthiopicDatetime
 * @param day Number
 */
export function addDays(date: EthiopicDatetime, day: number): EthiopicDatetime {
  checkRequiredArgs(arguments, 2)
  // date.setDate(Number(date) + date.getDate())
  return addDatetime(date, { day })
}
/**
 *
 * @param date EthiopicDatetime
 * @param month Number
 * @param day Number
 */
export function addMonths(
  date: EthiopicDatetime,
  month: number,
  day?: number,
): EthiopicDatetime {
  checkRequiredArgs(arguments, 2)
  month = Number(month) + date.getMonth()
  return date.setMonth(month)
}
/**
 *
 * @param date EthiopicDatetime
 * @param year Number
 * @param month Number
 * @param day NUmber
 */
export function addFullYears(
  date: EthiopicDatetime,
  year: number,
  month?: number,
  day?: number,
): EthiopicDatetime {
  checkRequiredArgs(arguments, 2)
  // year = Number(year) + date.getFullYear()
  // month = Number(month) + date.getMonth()
  // day = Number(date) + date.getDate()
  // date.setFullYear(year, month, day)
  return addDatetime(date, { year, month, day })
}

export function addDatetime(
  dirtyDate: EthiopicDatetime,
  datetime: Datetime,
): EthiopicDatetime {
  checkRequiredArgs(arguments, 2)
  let { year, month, day, hour, minute, second, millisecond } = datetime
  const date = new EthiopicDatetime(dirtyDate.getTime())
  year =
    typeof year !== 'undefined'
      ? Number(year) + date.getFullYear()
      : date.getFullYear()
  month =
    typeof month !== 'undefined'
      ? Number(month) + date.getMonth()
      : date.getMonth()
  day =
    typeof day !== 'undefined' ? Number(day) + date.getDate() : date.getDate()
  hour =
    typeof hour !== 'undefined'
      ? Number(hour) + date.getUTCHours()
      : date.getUTCHours()
  minute =
    typeof minute !== 'undefined'
      ? Number(minute) + date.getMinutes()
      : date.getMinutes()
  second =
    typeof second !== 'undefined'
      ? Number(second) + date.getSeconds()
      : date.getSeconds()
  millisecond =
    typeof millisecond !== 'undefined'
      ? Number(millisecond) + date.getMilliseconds()
      : date.getMilliseconds()

  return date.setDatetime({
    year,
    month,
    day,
    hour,
    minute,
    second,
    millisecond,
  })
}
