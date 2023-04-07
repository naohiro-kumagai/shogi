import { describe, expect, it } from 'vitest'
import { Tokin } from '../../Narigoma/Tokin'
import { Fuhyou } from '.'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'
import { CannotMoveError, MissingConditionsError } from '~~/domain/DomainError'

describe('Fuhyou', () => {
  it('前方に一マスだけ移動できる', () => {
    expect(new Fuhyou(new Masu(7, '七')).move(new Masu(7, '六'))).toStrictEqual(new Fuhyou(new Masu(7, '六')))

    expect(() => new Fuhyou(new Masu(7, '七')).move(new Masu(7, '五'))).toThrowError(new CannotMoveError('移動できません'))
  })

  it('条件を満たすと"と金"になれること', () => {
    const fu = new Fuhyou(new Masu(7, '四'))
    const fu2 = fu.move(new Masu(7, '三'))
    expect(fu2.promote() instanceof Tokin).toBe(true)

    const cannotPromoteFu = new Fuhyou(new Masu(7, '七'))
    const cannotPromoteFu2 = cannotPromoteFu.move(new Masu(7, '六'))
    expect(() => cannotPromoteFu2.promote()).toThrowError(new MissingConditionsError('この駒は成れません'))
  })
})
