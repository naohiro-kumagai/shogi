import { describe, expect, it } from 'vitest'
import { Tokin } from '.'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'
import { CannotMoveError } from '~~/domain/DomainError'

describe('Tokin', () => {
  it('左前、前、右前、左、右、後ろに一マスだけ移動できる', () => {
    expect(new Tokin(new Masu(7, '七')).move(new Masu(8, '六'))).toStrictEqual(new Tokin(new Masu(8, '六')))
    expect(new Tokin(new Masu(7, '七')).move(new Masu(7, '六'))).toStrictEqual(new Tokin(new Masu(7, '六')))
    expect(new Tokin(new Masu(7, '七')).move(new Masu(6, '六'))).toStrictEqual(new Tokin(new Masu(6, '六')))
    expect(new Tokin(new Masu(7, '七')).move(new Masu(8, '七'))).toStrictEqual(new Tokin(new Masu(8, '七')))
    expect(new Tokin(new Masu(7, '七')).move(new Masu(6, '七'))).toStrictEqual(new Tokin(new Masu(6, '七')))
    expect(new Tokin(new Masu(7, '七')).move(new Masu(7, '八'))).toStrictEqual(new Tokin(new Masu(7, '八')))

    expect(() => new Tokin(new Masu(7, '七')).move(new Masu(8, '八'))).toThrowError(new CannotMoveError('移動できません'))
    expect(() => new Tokin(new Masu(7, '七')).move(new Masu(6, '八'))).toThrowError(new CannotMoveError('移動できません'))
  })
})
