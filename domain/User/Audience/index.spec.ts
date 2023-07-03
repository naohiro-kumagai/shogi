import { expect, it } from 'vitest'
import { Audience } from '.'

it('IDを指定すると同じIDがセットされる', () => {
  const audience = new Audience('Alice')
  expect(audience.id.equal(new Audience('Alice', audience.id).id)).toBe(true)
})
