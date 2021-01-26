import { EthiopicDatetime } from '../../Datetime'
import { Datetime } from '../../Datetime/Interfaces'
import { checkRequiredArgs, Constants } from '../../Datetime/Utils'

export function differenceInDatetime(
  dirtyDateLeft: EthiopicDatetime,
  dirtyDateRight: EthiopicDatetime,
): Datetime {
  checkRequiredArgs(arguments, 2)

  let diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight)
  const result = {
    year: '',
    month: '',
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  }

  // TODO: Months, Year
  result.day = Math.floor(diff / Constants.millisecondPerDay)
  result.hour = Math.floor(
    (diff %= Constants.millisecondPerDay) / Constants.millisecondsPerHour,
  )
  result.minute = Math.floor(
    (diff %= Constants.millisecondsPerHour) / Constants.millisecondsPerMinute,
  )
  result.second = Math.floor(
    (diff % Constants.millisecondsPerMinute) / Constants.millisecondsPerSecond,
  )
  result.millisecond = Math.floor(diff % Constants.millisecondsPerSecond)

  return result
}

export function differenceInMilliseconds(
  dirtyDateLeft: EthiopicDatetime,
  dirtyDateRight: EthiopicDatetime,
): number {
  checkRequiredArgs(arguments, 2)

  const dateLeft = new EthiopicDatetime(dirtyDateLeft.getTime())
  const dateRight = new EthiopicDatetime(dirtyDateRight.getTime())

  return dateRight.getTime() - dateLeft.getTime()
}

export function differenceInSeconds(
  dirtyDateLeft: EthiopicDatetime,
  dirtyDateRight: EthiopicDatetime,
): number {
  checkRequiredArgs(arguments, 2)

  const dateLeft = new EthiopicDatetime(dirtyDateLeft.getTime())
  const dateRight = new EthiopicDatetime(dirtyDateRight.getTime())

  return Math.floor(
    (dateRight.getTime() - dateLeft.getTime()) /
      Constants.millisecondsPerSecond,
  )
}

export function differenceInMinutes(
  dirtyDateLeft: EthiopicDatetime,
  dirtyDateRight: EthiopicDatetime,
): number {
  checkRequiredArgs(arguments, 2)

  const dateLeft = new EthiopicDatetime(dirtyDateLeft.getTime())
  const dateRight = new EthiopicDatetime(dirtyDateRight.getTime())

  return Math.floor(
    (dateRight.getTime() - dateLeft.getTime()) /
      Constants.millisecondsPerMinute,
  )
}

export function differenceInHours(
  dirtyDateLeft: EthiopicDatetime,
  dirtyDateRight: EthiopicDatetime,
): number {
  checkRequiredArgs(arguments, 2)

  const dateLeft = new EthiopicDatetime(dirtyDateLeft.getTime())
  const dateRight = new EthiopicDatetime(dirtyDateRight.getTime())

  return Math.floor(
    (dateRight.getTime() - dateLeft.getTime()) / Constants.millisecondsPerHour,
  )
}

export function differenceInDays(
  dirtyDateLeft: EthiopicDatetime,
  dirtyDateRight: EthiopicDatetime,
): number {
  checkRequiredArgs(arguments, 2)

  const dateLeft = new EthiopicDatetime(dirtyDateLeft.getTime())
  const dateRight = new EthiopicDatetime(dirtyDateRight.getTime())

  return Math.floor(
    (dateRight.getTime() - dateLeft.getTime()) / Constants.millisecondPerDay,
  )
}

export function differenceInWeeks(
  dirtyDateLeft: EthiopicDatetime,
  dirtyDateRight: EthiopicDatetime,
): number {
  checkRequiredArgs(arguments, 2)

  const dateLeft = new EthiopicDatetime(dirtyDateLeft.getTime())
  const dateRight = new EthiopicDatetime(dirtyDateRight.getTime())

  return Math.floor(
    (dateRight.getTime() - dateLeft.getTime()) / Constants.millisecondPerWeek,
  )
}

export function differenceInMonths(
  dirtyDateLeft: EthiopicDatetime,
  dirtyDateRight: EthiopicDatetime,
): number {
  checkRequiredArgs(arguments, 2)

  const dateRight = new EthiopicDatetime(dirtyDateRight.getTime())
  const stepDate = new EthiopicDatetime(dirtyDateLeft.getTime())
  let monthCount: number = 0
  while (stepDate.getTime() < dateRight.getTime()) {
    const currentMonth = stepDate.getMonth()
    stepDate.setMonth(currentMonth + 1)
    monthCount += 1
  }

  if (stepDate.getTime() !== dateRight.getTime()) monthCount -= 1

  return monthCount
}

export function differenceInYears(
  dirtyDateLeft: EthiopicDatetime,
  dirtyDateRight: EthiopicDatetime,
): number {
  checkRequiredArgs(arguments, 2)
  const monthDiff = differenceInMonths(dirtyDateLeft, dirtyDateRight)

  return Math.ceil(monthDiff / 13)
}
