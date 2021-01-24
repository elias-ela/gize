import { dateToEpoch } from './Convertor'
import { initConfig } from '../Interfaces/initConfig'

export function parseParameters(parameters: number[]) {
  const initialValues: initConfig = {
    moment: Date.now(),
    locale: 'am',
    hour12: true,
  }
  if (parameters.length === 0) {
    initialValues.moment = Date.now()
  } else if (parameters.length === 1) {
    initialValues.moment = Number(parameters[0])
  } else if (parameters.length === 3) {
    const [year, month, day] = parameters
    initialValues.moment = dateToEpoch({
      year: Number(year),
      month: Number(month),
      day: Number(day),
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    })
  } else if (parameters.length === 6) {
    const [year, month, day, hour, minute, second] = parameters
    initialValues.moment = dateToEpoch({
      year: Number(year),
      month: Number(month),
      day: Number(day),
      hour: Number(hour),
      minute: Number(minute),
      second: Number(second),
      millisecond: 0,
    })
  } else if (parameters.length === 7) {
    const [year, month, day, hour, minute, second, millisecond] = parameters
    initialValues.moment = dateToEpoch({
      year: Number(year),
      month: Number(month),
      day: Number(day),
      hour: Number(hour),
      minute: Number(minute),
      second: Number(second),
      millisecond: Number(millisecond),
    })
  } else {
    throw new TypeError(`Invalid Argument ${parameters}`)
  }

  return initialValues
}

// function isDefined<T>(value: T | undefined | null): value is T {
//   return <T>value !== undefined && <T>value !== null
// }

// function processInput(inputVal: any): number | Config {
//   if (typeof inputVal === 'number') {
//     return Number(inputVal)
//   } else if (inputVal instanceof Date) {
//     return Date.now()
//   } else if (inputVal instanceof EthiopicDatetime) {
//     return inputVal.getTime()
//   } else if (isDefined(inputVal)) {
//     return processConfig(inputVal)
//   } else if (isDefined(inputVal)) {
//     return processDatetime(inputVal)
//   } else {
//     throw new TypeError(`Invalid Argument ${inputVal}`)
//   }
// }

// function processConfig(config: Config): Config {
//   const { hour12, locale } = config
//   const newConfig: Config = {}
//   if (hour12) newConfig.hour12 = hour12
//   if (locale) newConfig.locale = locale

//   return newConfig
// }

// function processDatetime(datetime: Datetime): number {
//   const { year, month, day, hour, minute, second, millisecond } = datetime
//   if (year && month && day && hour && minute && second && millisecond) {
//     return dateToEpoch({
//       year: Number(year),
//       month: Number(month),
//       day: Number(day),
//       hour: Number(hour),
//       minute: Number(minute),
//       second: Number(second),
//       millisecond: Number(millisecond),
//     })
//   } else if (year && month && day) {
//     return dateToEpoch({
//       year: Number(year),
//       month: Number(month),
//       day: Number(day),
//       hour: 0,
//       minute: 0,
//       second: 0,
//       millisecond: 0,
//     })
//   } else {
//     return Date.now()
//   }
// }
