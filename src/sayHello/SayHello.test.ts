import { sayHello } from './SayHello'

it('should say Hello Panda', () => {
  expect(sayHello('Panda')).toEqual('Hello Panda')
})
