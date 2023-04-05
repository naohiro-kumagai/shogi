import { describe, expect, it } from 'vitest'
import { Fuhyou } from '.'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'
import { CannotMoveError } from '~~/domain/DomainError'

describe('Fuhyou', () => {
  it('前方に一マスだけ移動できる', () => {
    expect(new Fuhyou(new Masu(7, '七')).move(new Masu(7, '六'))).toStrictEqual(new Fuhyou(new Masu(7, '六')))

    expect(() => new Fuhyou(new Masu(7, '七')).move(new Masu(7, '五'))).toThrowError(new CannotMoveError('移動できません'))
  })
})
