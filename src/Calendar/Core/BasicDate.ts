export class BasicDate {
  private _day: number
  private _month: number
  private _year: number
  private _jdn: number | undefined

  constructor(year: number, month: number, day: number, jdn?: number) {
    this._day = day
    this._month = month
    this._year = year

    if (jdn !== undefined) this._jdn = jdn
  }

  public get day(): number {
    return this._day
  }

  public get month(): number {
    return this._month
  }

  public get year(): number {
    return this._year
  }

  public get jdn(): number | undefined {
    return this._jdn
  }
}
