import { expect, it } from 'vitest'
import { TaikyokuId } from '.'
import { ValidationError } from '~~/domain/DomainError'

it('値を指定しない場合新規発番される', () => {
  const taikyokuId = new TaikyokuId()
  expect(taikyokuId instanceof TaikyokuId).toBe(true)
})

it('値を指定した場合その値のインスタンスが生成される', () => {
  const taikyokuId = new TaikyokuId('01GWS9BYKWJCB7SJVGPWCF2SFK')
  expect(taikyokuId.equal(new TaikyokuId('01GWS9BYKWJCB7SJVGPWCF2SFK'))).toBe(true)
})

it('値のフォーマットが正しくない場合エラーを投げる', () => {
  expect(() => new TaikyokuId('01GWS9BYKWJ')).toThrow(new ValidationError('invalid id'))
})
