import { sayHello } from './index'

it('should say Hello Panda', () => {
  expect(sayHello('Panda')).toEqual('Hello Panda')
})
