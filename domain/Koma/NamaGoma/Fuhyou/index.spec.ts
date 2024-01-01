import { describe, expect, it } from 'vitest'
import { Tokin } from '../../Narigoma/Tokin'
import { Fuhyou } from '.'
// import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'
import { MissingConditionsError } from '../../../DomainError'

describe('Fuhyou', () => {
  // it('前方に一マスだけ移動できる', () => {
  //   // Given
  //   const fu = new Fuhyou()
  //   // When
  //   const movedFu = fu.move(new Masu(7, '六'))
  //   // Then
  //   expect(movedFu).toStrictEqual(new Fuhyou())
  //   expect(() => fu.move(new Masu(7, '五'))).toThrowError(new CannotMoveError('移動できません'))
  // })

  it.skip('条件を満たすと"と金"になれること', () => {
    // Given
    const initialFu = new Fuhyou()
    // const movedFu = initialFu.move(new Masu(7, '三'))
    // When
    const promotedFu = initialFu.promote()
    // Then
    expect(() => initialFu.promote()).toThrowError(new MissingConditionsError('この駒は成れません'))
    expect(promotedFu instanceof Tokin).toBe(true)
  })
})
