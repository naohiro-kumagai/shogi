import { expect, it } from 'vitest'
import { UserId } from '.'
import { ValidationError } from '~~/domain/DomainError'

it('値を指定しない場合新規発番される', () => {
  const userId = new UserId()
  expect(userId instanceof UserId).toBe(true)
})

it('値を指定した場合その値のインスタンスが生成される', () => {
  const userId = new UserId('01GWS9BYKWJCB7SJVGPWCF2SFK')
  expect(userId.equal(new UserId('01GWS9BYKWJCB7SJVGPWCF2SFK'))).toBe(true)
})

it('値のフォーマットが正しくない場合エラーを投げる', () => {
  expect(() => new UserId('01GWS9BYKWJ')).toThrow(new ValidationError('invalid id'))
})
