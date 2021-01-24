import { EthiopicDatetime } from '../../Datetime'
import { Datetime } from '../../Datetime/Interfaces'
import { checkRequiredArgs } from '../../Datetime/Utils/CheckRequiredArgs'

const valueIn = (datetime: Datetime, value: string): boolean => {
  return value in datetime
}

const subtract = (value1: number, value2: number): number => {
  return value1 - value2
}

export function subDatetime(
  dirtyDate: EthiopicDatetime,
  datetime: Datetime,
): EthiopicDatetime {
  checkRequiredArgs(arguments, 2)

  if (typeof datetime !== 'object') return new EthiopicDatetime(NaN)

  const date = new EthiopicDatetime(dirtyDate.getTime())

  let { year, month, day, hour, minute, second, millisecond } = datetime
  year = valueIn(datetime, 'year')
    ? subtract(date.getFullYear(), Number(year))
    : date.getFullYear()
  month = valueIn(datetime, 'month')
    ? subtract(date.getMonth(), Number(month))
    : date.getMonth()
  day = valueIn(datetime, 'day')
    ? subtract(date.getDate(), Number(day))
    : date.getDate()
  hour = valueIn(datetime, 'hour')
    ? subtract(date.getUTCHours(), Number(hour))
    : date.getUTCHours()
  minute = valueIn(datetime, 'minute')
    ? subtract(date.getMinutes(), Number(minute))
    : date.getMinutes()
  second = valueIn(datetime, 'second')
    ? subtract(date.getSeconds(), Number(second))
    : date.getSeconds()
  millisecond = valueIn(datetime, 'millisecond')
    ? subtract(date.getMilliseconds(), Number(millisecond))
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
