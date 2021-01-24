import { Datetime } from '../Interfaces'
import { Constants, checkRequiredArgs } from '../Utils'

export function fromUnix(ms: number): number {
  checkRequiredArgs(arguments, 1)
  return Constants.unixEpoch + Math.floor(ms / 86400000)
}

export function fromEthiopic(date: Datetime): number {
  const { year, month, day } = date
  checkRequiredArgs(arguments, 1)
  return Math.floor(
    Constants.ethiopicEpoch -
      1 +
      365 * (Number(year) - 1) +
      Number(year) / 4 +
      30 * (Number(month) - 1) +
      Number(day),
  )
}

export function dateToEpoch(date: Datetime): number {
  checkRequiredArgs(arguments, 1)
  const { year, month, day, hour, minute, second, millisecond } = date
  return (
    (fromEthiopic({
      year: Number(year),
      month: Number(month),
      day: Number(day),
    }) -
      Constants.unixEpoch) *
      Constants.millisecondPerDay +
    Number(hour) * Constants.millisecondsPerHour +
    Number(minute) * Constants.millisecondsPerMinute +
    Number(second) * Constants.millisecondsPerSecond +
    Number(millisecond)
  )
}
