export interface Datetime {
  readonly type: 'Datetime'
  year: number
  month: number
  day: number
  hour?: number
  minute?: number
  second?: number
  millisecond?: number
}
