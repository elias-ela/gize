import { Constants, checkRequiredArgs } from '../Utils'

export function fromUnix(ms: number): number {
  checkRequiredArgs(arguments, 1)
  return Constants.unixEpoch + Math.floor(ms / 86400000)
}

export function fromEthiopic(year: number, month: number, day: number): number {
  checkRequiredArgs(arguments, 3)
  return Math.floor(
    Constants.ethiopicEpoch -
      1 +
      365 * (year - 1) +
      year / 4 +
      30 * (month - 1) +
      day,
  )
}

export function dateToEpoch(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  millisecond: number,
): number {
  checkRequiredArgs(arguments, 7)
  return (
    (fromEthiopic(year, month, day) - Constants.unixEpoch) *
      Constants.millisecondPerDay +
    hour * Constants.millisecondsPerHour +
    minute * Constants.millisecondsPerMinute +
    second * Constants.millisecondsPerSecond +
    millisecond
  )
}
