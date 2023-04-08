import { describe, expect, it } from 'vitest'
import { Tokin } from '../../Narigoma/Tokin'
import { Fuhyou } from '.'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'
import { CannotMoveError, MissingConditionsError } from '~~/domain/DomainError'

describe('Fuhyou', () => {
  it('前方に一マスだけ移動できる', () => {
    // Given
    const fu = new Fuhyou(new Masu(7, '七'))
    // When
    const movedFu = fu.move(new Masu(7, '六'))
    // Then
    expect(movedFu).toStrictEqual(new Fuhyou(new Masu(7, '六')))
    expect(() => fu.move(new Masu(7, '五'))).toThrowError(new CannotMoveError('移動できません'))
  })

  it('条件を満たすと"と金"になれること', () => {
    // Given
    const initialFu = new Fuhyou(new Masu(7, '四'))
    const movedFu = initialFu.move(new Masu(7, '三'))
    // When
    const promotedFu = movedFu.promote()
    // Then
    expect(() => initialFu.promote()).toThrowError(new MissingConditionsError('この駒は成れません'))
    expect(promotedFu).toStrictEqual(new Tokin(new Masu(7, '三')))
  })
})
