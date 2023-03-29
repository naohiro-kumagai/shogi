import { expect, it } from 'vitest'
import { Audience } from '.'

it('', () => {
  const audience = new Audience('Alice', '01GWPQXN798HTK89W1325ZCD5Q')
  expect(audience).toStrictEqual(new Audience('Alice', '01GWPQXN798HTK89W1325ZCD5Q'))
})
