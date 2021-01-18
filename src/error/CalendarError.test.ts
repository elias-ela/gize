import { CalendarError } from './CalendarError'

describe('CalendarError', () => {
  it('should throw calendar error', () => {
    const err = new CalendarError('Error msg')
    expect(err.message).toBe('Error msg')
  })
})
