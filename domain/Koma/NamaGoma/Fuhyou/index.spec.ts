import { describe, expect, it } from 'vitest'
import { Fuhyou } from '.'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'
import { Suji } from '~~/domain/Taikyoku/ShogiBoard/Masu/Suji'
import { Dan } from '~~/domain/Taikyoku/ShogiBoard/Masu/Dan'
import { CannotMoveError } from '~~/domain/DomainError'

describe('Fuhyou', () => {
  it('前方に一マスだけ移動できる', () => {
    expect(new Fuhyou(new Masu(new Suji(7), new Dan('七'))).move(new Masu(new Suji(7), new Dan('六')))).toStrictEqual(new Fuhyou(new Masu(new Suji(7), new Dan('六'))))

    expect(() => new Fuhyou(new Masu(new Suji(7), new Dan('七'))).move(new Masu(new Suji(7), new Dan('五')))).toThrowError(new CannotMoveError('移動できません'))
  })
})
