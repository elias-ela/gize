import { EthiopicDatetime } from '../EthiopicDatetime'

export interface IEthiopicDatetime {
  /** Returns a string representation of a date. The format of the string depends on the locale. */
  toString(): string
  /** Returns a date as a string value. */
  toDateString(): string
  /** Returns a time as a string value. */
  toTimeString(): string
  /** Returns a value as a string value appropriate to the host environment's current locale. */
  toLocaleString(): string
  /** Returns a date as a string value appropriate to the host environment's current locale. */
  toLocaleDateString(): string
  /** Returns a time as a string value appropriate to the host environment's current locale. */
  toLocaleTimeString(): string
  /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
  valueOf(): number
  /** Gets the time value in milliseconds. */
  getTime(): number
  /** Gets the year, using local time. */
  getFullYear(): number
  /** Gets the month, using local time. */
  getMonth(): number
  /** Gets the day-of-the-month, using local time. */
  getDate(): number
  /** Gets the day of the week, using local time. */
  getDay(): number
  /** Gets the hours in a date, using local time. */
  getHours(): number
  /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
  getUTCHours(): number
  /** Gets the minutes of a Date object, using local time. */
  getMinutes(): number
  /** Gets the seconds of a Date object, using local time. */
  getSeconds(): number
  /** Gets the milliseconds of a Date, using local time. */
  getMilliseconds(): number
  /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */
  getTimezoneOffset(): number
  /**
   * Sets the date and time value in the Date object.
   * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
   */
  setTime(time: number): EthiopicDatetime
  /**
   * Sets the milliseconds value in the Date object using local time.
   * @param ms A numeric value equal to the millisecond value.
   */
  setMilliseconds(ms: number): EthiopicDatetime
  /**
   * Sets the seconds value in the Date object using local time.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setSeconds(sec: number, ms?: number): EthiopicDatetime
  /**
   * Sets the minutes value in the Date object using local time.
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setMinutes(min: number, sec?: number, ms?: number): EthiopicDatetime
  /**
   * Sets the hour value in the Date object using local time.
   * @param hours A numeric value equal to the hours value.
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setHours(
    hours: number,
    min?: number,
    sec?: number,
    ms?: number,
  ): EthiopicDatetime
  /**
   * Sets the numeric day-of-the-month value of the Date object using local time.
   * @param date A numeric value equal to the day of the month.
   */
  setDate(date: number): EthiopicDatetime
  /**
   * Sets the month value in the Date object using local time.
   * @param month A numeric value equal to the month. The value for September is 0, and other month values follow consecutively.
   * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
   */
  setMonth(month: number, date?: number): EthiopicDatetime
  /**
   * Sets the year of the Date object using local time.
   * @param year A numeric value for the year.
   * @param month A zero-based numeric value for the month (1 for September, 13 for August). Must be specified if numDate is specified.
   * @param date A numeric value equal for the day of the month.
   */
  setFullYear(year: number, month?: number, date?: number): EthiopicDatetime
  /** Returns a date as a string value in ISO format. */
  toISOString(): string
  /** Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. */
  toJSON(key?: any): string
}
