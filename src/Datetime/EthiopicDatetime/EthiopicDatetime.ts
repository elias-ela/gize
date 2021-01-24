import { IEthiopicDatetime, Datetime, initConfig } from '../Interfaces'
import { parseParameters } from './ParameterParser'
import { localeProvider } from '../Locale'
import { checkRequiredArgs, Constants, padLeft } from '../Utils'
import { dateToEpoch, fromEthiopic, fromUnix } from './Convertor'

export class EthiopicDatetime implements IEthiopicDatetime {
  private initialValues!: initConfig
  constructor(...args: any) {
    this.initialValues = parseParameters(args)
  }

  private toNumber(date: Datetime): { [key: string]: number } {
    let { year, month, day, hour, minute, second, millisecond } = date
    year = typeof year !== 'undefined' ? Number(year) : this.getFullYear()
    month = typeof month !== 'undefined' ? Number(month) : this.getMonth()
    day = typeof day !== 'undefined' ? Number(day) : this.getDate()
    hour = typeof hour !== 'undefined' ? Number(hour) : this.getUTCHours()
    minute = typeof minute !== 'undefined' ? Number(minute) : this.getMinutes()
    second = typeof second !== 'undefined' ? Number(second) : this.getSeconds()
    millisecond =
      typeof millisecond !== 'undefined'
        ? Number(millisecond)
        : this.getMilliseconds()

    return { year, month, day, hour, minute, second, millisecond }
  }

  private getString(): { [key: string]: string | number } {
    const localeData = localeProvider(this.initialValues.locale)
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

  getDatetime(): Datetime {
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

  setDatetime(date: Datetime): EthiopicDatetime {
    const values = this.toNumber(date)
    this.initialValues.moment = dateToEpoch(values)
    return this
  }

  toString(): string {
    const { year, day, hour, minute, second } = this.getDatetime()
    const { dayName, monthName, timezone } = this.getString()
    return `${dayName} ${monthName} ${day} ${year} ${hour}:${minute}:${second} GMT+${padLeft(
      timezone,
      1,
    )}00`
  }

  toDateString(): string {
    const { year, day } = this.getDatetime()
    const { dayName, monthName } = this.getString()
    return `${dayName} ${monthName} ${day} ${year}`
  }

  toTimeString(): string {
    const { hour, minute, second } = this.getDatetime()
    const timezone = Constants.timeZoneOffset
    return `${hour}:${minute}:${second} GMT+${padLeft(timezone, 1)}00`
  }

  toLocaleString(): string {
    const { year, month, day, hour, minute, second } = this.getDatetime()
    return `${day}/${month}/${year}, ${hour}:${minute}:${second} ${this.getMeridiem()}`
  }

  toLocaleDateString(): string {
    const { year, month, day } = this.getDatetime()
    return `${day}/${month}/${year}`
  }

  toLocaleTimeString(): string {
    const { hour, minute, second } = this.getDatetime()
    return `${hour}:${minute}:${second} ${this.getMeridiem()}`
  }

  valueOf(): number {
    return this.getTime()
  }

  getMeridiem(): string {
    if (this.initialValues.hour12) return this.getHours() >= 12 ? 'PM' : 'AM'
    else return ''
  }

  getTime(): number {
    return this.initialValues.moment
  }

  getFullYear(): number {
    return Math.floor(
      (4 * (fromUnix(this.initialValues.moment) - Constants.ethiopicEpoch) +
        1463) /
        1461,
    )
  }

  getMonth(): number {
    return (
      Math.floor(
        (fromUnix(this.initialValues.moment) -
          fromEthiopic({ year: this.getFullYear(), month: 1, day: 1 })) /
          30,
      ) + 1
    )
  }

  getDate(): number {
    return (
      fromUnix(this.initialValues.moment) +
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
    if (this.initialValues.hour12) {
      ethiopicTime = (this.getUTCHours() + Constants.timeZoneOffset) % 12
      ethiopicTime = ethiopicTime || 12
    } else ethiopicTime = this.getUTCHours() + Constants.timeZoneOffset
    return ethiopicTime
  }

  getUTCHours(): number {
    return (
      Math.floor(this.initialValues.moment / Constants.millisecondsPerHour) % 24
    )
  }

  getMinutes(): number {
    return (
      Math.floor(
        Math.abs(this.initialValues.moment / Constants.millisecondsPerMinute),
      ) % 60
    )
  }

  getSeconds(): number {
    return (
      Math.floor(
        Math.abs(this.initialValues.moment / Constants.millisecondsPerSecond),
      ) % 60
    )
  }

  getMilliseconds(): number {
    return Math.abs(this.initialValues.moment % 1000)
  }

  getTimezoneOffset(): number {
    return -Constants.timeZoneOffset * 60
  }

  setTime(time: number): EthiopicDatetime {
    checkRequiredArgs(arguments, 1)
    this.initialValues.moment = Number(time)
    return this
  }

  setMilliseconds(ms: number): EthiopicDatetime {
    checkRequiredArgs(arguments, 1)
    return this.setDatetime({ millisecond: ms })
  }

  setSeconds(sec: number, ms?: number): EthiopicDatetime {
    checkRequiredArgs(arguments, 1)
    return this.setDatetime({ second: sec, millisecond: ms })
  }

  setMinutes(min: number, sec?: number, ms?: number): EthiopicDatetime {
    checkRequiredArgs(arguments, 1)
    return this.setDatetime({
      minute: min,
      second: sec,
      millisecond: ms,
    })
  }

  setHours(
    hours: number,
    min?: number,
    sec?: number,
    ms?: number,
  ): EthiopicDatetime {
    checkRequiredArgs(arguments, 1)
    return this.setDatetime({
      hour: hours,
      minute: min,
      second: sec,
      millisecond: ms,
    })
  }

  setDate(date: number): EthiopicDatetime {
    checkRequiredArgs(arguments, 1)
    return this.setDatetime({
      day: date,
    })
  }

  setMonth(month: number, date?: number): EthiopicDatetime {
    checkRequiredArgs(arguments, 1)
    return this.setDatetime({
      month: month,
      day: date,
    })
  }

  setFullYear(year: number, month?: number, date?: number): EthiopicDatetime {
    checkRequiredArgs(arguments, 1)
    return this.setDatetime({
      year: year,
      month: month,
      day: date,
    })
  }

  toISOString(): string {
    const { year, month, day, minute, second, millisecond } = this.getDatetime()
    const hour = padLeft(this.getUTCHours(), 1)
    return `${year}-${month}-${day}T${hour}:${minute}:${second}.${millisecond}Z`
  }

  toJSON(key?: any): string {
    return this.toISOString()
  }
}
