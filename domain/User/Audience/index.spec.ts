import { expect, it } from 'vitest'
import { Audience } from '.'

it('', () => {
  const audience = new Audience('Alice')
  expect(audience).toStrictEqual(new Audience('Alice'))
})
