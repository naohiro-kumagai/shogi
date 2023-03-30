import { expect, it } from 'vitest'
import { UserId } from '../../UserId'
import { Sente } from '.'

it('idを指定しない場合、新規発番される', () => {
  const sente = new Sente('Alice')
  expect(sente.id instanceof UserId).toBe(true)
})

it('idを指定した場合そのIDをもつインスタンスが生成される', () => {
  const userId = new UserId()
  const sente = new Sente('Alice', userId)
  expect(sente.id).toBe(userId)
})
