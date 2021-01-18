export interface ICalendar {
  epoch: number
  name: string
  /**
   * Convert Julian day number (JDN) to  Date.
   * @param {number} jdn (Julian Date Number)
   * @returns {object} Date object.
   */
  fromJdn(jdn: number): object
  /**
   * Convert Date to Julian day number (JDN).
   * @param {number} day
   * @param {number} month
   * @param {number} year
   * @returns {number} jdn (Julian Date Number)
   */
  toJdn(year: number, month: number, day: number): number
  /**
   * Validate Dates.
   * @param {number} day
   * @param {number} month
   * @param {number} year
   * @returns void.
   */
  validator(year: number, month: number, day: number): void
  /**
   * Test if a year is leap year or not.
   * @param {number} year
   * @returns {boolean} Boolean
   */
  isYearLeap(year: number): boolean
}
