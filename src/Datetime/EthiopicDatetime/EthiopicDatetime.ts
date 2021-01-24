import { IEthiopicDatetime, Datetime, initConfig } from '../Interfaces'
import { parseParameters } from './ParameterParser'
import { localeProvider } from '../Locale'
import { checkRequiredArgs, Constants, padLeft } from '../Utils'
import { dateToEpoch, fromEthiopic, fromUnix } from './Convertor'

let initialValues: initConfig
export class EthiopicDatetime implements IEthiopicDatetime {
  constructor(...args: any) {
    initialValues = parseParameters(args)
  }

  toNumber(date: Datetime): { [key: string]: number } {
    let { year, month, day, hour, minute, second, millisecond } = date
    year = typeof year !== 'undefined' ? Number(year) : this.getFullYear()
    month = typeof month !== 'undefined' ? Number(month) : this.getMonth()
    day = typeof day !== 'undefined' ? Number(day) : this.getDate()
    hour = typeof hour !== 'undefined' ? Number(hour) : this.getHours()
    minute = typeof minute !== 'undefined' ? Number(minute) : this.getMinutes()
    second = typeof second !== 'undefined' ? Number(second) : this.getSeconds()
    millisecond =
      typeof millisecond !== 'undefined'
        ? Number(millisecond)
        : this.getMilliseconds()

    return { year, month, day, hour, minute, second, millisecond }
  }

  getString(): { [key: string]: string | number } {
    const localeData = localeProvider(initialValues.locale)
    const day = this.getDay()
    const month = this.getMonth()
    const dayName = localeData?.dayNames[day].trim()
    const monthName = localeData?.monthNames[month - 1].trim()
    const timezone = Constants.timeZoneOffset

    return {
      dayName,
      monthName,
      timezone,
    }
  }

  get(): Datetime {
    return {
      year: padLeft(this.getFullYear(), 1),
      month: padLeft(this.getMonth(), 1),
      day: padLeft(this.getDate(), 1),
      hour: padLeft(this.getHours(), 1),
      minute: padLeft(this.getMinutes(), 1),
      second: padLeft(this.getSeconds(), 1),
      millisecond: this.getMilliseconds(),
    }
  }

  set(date: Datetime): number {
    const values = this.toNumber(date)
    return (initialValues.moment = dateToEpoch(values))
  }

  toString(): string {
    const { year, day, hour, minute, second } = this.get()
    const { dayName, monthName, timezone } = this.getString()
    return `${dayName} ${monthName} ${day} ${year} ${hour}:${minute}:${second} GMT+${padLeft(
      timezone,
      1,
    )}00`
  }

  toDateString(): string {
    const { year, day } = this.get()
    const { dayName, monthName } = this.getString()
    return `${dayName} ${monthName} ${day} ${year}`
  }

  toTimeString(): string {
    const { hour, minute, second } = this.get()
    const timezone = Constants.timeZoneOffset
    return `${hour}:${minute}:${second} GMT+${padLeft(timezone, 1)}00`
  }

  toLocaleString(): string {
    const { year, month, day, hour, minute, second } = this.get()
    return `${day}/${month}/${year}, ${hour}:${minute}:${second} ${this.getMeridiem()}`
  }

  toLocaleDateString(): string {
    const { year, month, day } = this.get()
    return `${day}/${month}/${year}`
  }

  toLocaleTimeString(): string {
    const { hour, minute, second } = this.get()
    return `${hour}:${minute}:${second} ${this.getMeridiem()}`
  }

  valueOf(): number {
    return this.getTime()
  }

  getMeridiem(): string {
    if (initialValues.hour12) return this.getHours() >= 12 ? 'PM' : 'AM'
    else return ''
  }

  getTime(): number {
    return initialValues.moment
  }

  getFullYear(): number {
    return Math.floor(
      (4 * (fromUnix(initialValues.moment) - Constants.ethiopicEpoch) + 1463) /
        1461,
    )
  }

  getMonth(): number {
    return (
      Math.floor(
        (fromUnix(initialValues.moment) -
          fromEthiopic({ year: this.getFullYear(), month: 1, day: 1 })) /
          30,
      ) + 1
    )
  }

  getDate(): number {
    return (
      fromUnix(initialValues.moment) +
      1 -
      fromEthiopic({ year: this.getFullYear(), month: this.getMonth(), day: 1 })
    )
  }

  getDay(): number {
    const ameteAlem: number = Constants.ameteFida + this.getFullYear()
    const rabeet = Math.floor(ameteAlem / 4)
    const numDaysIn = (this.getMonth() - 1) * 30 + this.getDate()
    return (ameteAlem + rabeet + numDaysIn) % 7
  }

  getHours(): number {
    // Accounting for the timezone offset
    let ethiopicTime: number
    if (initialValues.hour12) {
      ethiopicTime = (this.getUTCHours() + Constants.timeZoneOffset) % 12
      ethiopicTime = ethiopicTime || 12
    } else ethiopicTime = this.getUTCHours() + Constants.timeZoneOffset
    return ethiopicTime
  }

  getUTCHours(): number {
    return Math.floor(initialValues.moment / Constants.millisecondsPerHour) % 24
  }

  getMinutes(): number {
    return (
      Math.floor(
        Math.abs(initialValues.moment / Constants.millisecondsPerMinute),
      ) % 60
    )
  }

  getSeconds(): number {
    return (
      Math.floor(
        Math.abs(initialValues.moment / Constants.millisecondsPerSecond),
      ) % 60
    )
  }

  getMilliseconds(): number {
    return Math.abs(initialValues.moment % 1000)
  }

  getTimezoneOffset(): number {
    return -Constants.timeZoneOffset * 60
  }

  setTime(time: number): number {
    checkRequiredArgs(arguments, 1)
    return (initialValues.moment = Number(time))
  }

  setMilliseconds(ms: number): number {
    checkRequiredArgs(arguments, 1)
    return this.set({ millisecond: ms })
  }

  setSeconds(sec: number, ms?: number): number {
    checkRequiredArgs(arguments, 1)
    return this.set({ second: sec, millisecond: ms })
  }

  setMinutes(min: number, sec?: number, ms?: number): number {
    checkRequiredArgs(arguments, 1)
    return this.set({
      minute: min,
      second: sec,
      millisecond: ms,
    })
  }

  setHours(hours: number, min?: number, sec?: number, ms?: number): number {
    checkRequiredArgs(arguments, 1)
    return this.set({
      hour: hours,
      minute: min,
      second: sec,
      millisecond: ms,
    })
  }

  setDate(date: number): number {
    checkRequiredArgs(arguments, 1)
    return this.set({
      day: date,
    })
  }

  setMonth(month: number, date?: number): number {
    checkRequiredArgs(arguments, 1)
    return this.set({
      month: month,
      day: date,
    })
  }

  setFullYear(year: number, month?: number, date?: number): number {
    checkRequiredArgs(arguments, 1)
    return this.set({
      year: year,
      month: month,
      day: date,
    })
  }

  toISOString(): string {
    const { year, month, day, minute, second, millisecond } = this.get()
    const hour = padLeft(this.getUTCHours(), 1)
    return `${year}-${month}-${day}T${hour}:${minute}:${second}.${millisecond}Z`
  }

  toJSON(key?: any): string {
    return this.toISOString()
  }
}
