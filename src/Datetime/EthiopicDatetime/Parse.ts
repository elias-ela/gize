import { Config, Datetime } from '../Interfaces'
import { EthiopicDatetime } from './EthiopicDatetime'
import { dateToEpoch } from './Convertor'
import { initConfig } from '../Interfaces/initConfig'

const initialValues: initConfig = {
  moment: Date.now(),
  locale: 'am',
  hour12: true,
}

export function parseParameters(parameters: any) {
  if (parameters.length === 0) {
    initialValues.moment = Date.now()
  } else if (parameters.length === 1) {
    processInput(parameters[0])
  } else if (parameters.length === 2) {
    processInput(parameters[0])
    processInput(parameters[1])
  } else if (parameters.length === 3) {
    const [y, m, d] = parameters
    initialValues.moment = dateToEpoch(
      Number(y),
      Number(m),
      Number(d),
      0,
      0,
      0,
      0,
    )
  } else if (parameters.length === 6) {
    const [y, m, d, h, mi, s] = parameters
    initialValues.moment = dateToEpoch(
      Number(y),
      Number(m),
      Number(d),
      Number(h),
      Number(mi),
      Number(s),
      0,
    )
  } else if (parameters.length === 7) {
    const [y, m, d, h, mi, s, ms] = parameters
    initialValues.moment = dateToEpoch(
      Number(y),
      Number(m),
      Number(d),
      Number(h),
      Number(mi),
      Number(s),
      Number(ms),
    )
  } else {
    throw new TypeError(`Invalid Argument ${parameters}`)
  }

  return initialValues
}

function isDefined<T>(value: T | undefined | null): value is T {
  return <T>value !== undefined && <T>value !== null
}

function processInput(inputVal: any): void {
  if (typeof inputVal === 'number') {
    initialValues.moment = Number(inputVal)
  } else if (inputVal instanceof Date) {
    initialValues.moment = Date.now()
  } else if (inputVal instanceof EthiopicDatetime) {
    initialValues.moment = inputVal.getTime()
  } else if (isDefined(inputVal)) {
    processConfig(inputVal)
  } else if (isDefined(inputVal)) {
    processDatetime(inputVal)
  } else {
    throw new TypeError(`Invalid Argument ${inputVal}`)
  }
}

function processConfig(config: Config): void {
  const { hour12, locale } = config
  if (hour12) initialValues.hour12 = hour12
  if (locale) initialValues.locale = locale
}

function processDatetime(datetime: Datetime): void {
  const { year, month, day, hour, minute, second, millisecond } = datetime
  if (year && month && day && hour && minute && second && millisecond) {
    initialValues.moment = dateToEpoch(
      Number(year),
      Number(month),
      Number(day),
      Number(hour),
      Number(minute),
      Number(second),
      Number(millisecond),
    )
  } else if (year && month && day) {
    initialValues.moment = dateToEpoch(
      Number(year),
      Number(month),
      Number(day),
      0,
      0,
      0,
      0,
    )
  } else {
    initialValues.moment = Date.now()
  }
}
