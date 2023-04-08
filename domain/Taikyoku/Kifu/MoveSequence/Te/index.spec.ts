import { describe, expect, it } from 'vitest'
import { Te } from '.'
import { Sente } from '~~/domain/User/Player/Sente'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'
import { Fuhyou } from '~~/domain/Koma/NamaGoma/Fuhyou'

describe('Te', () => {
  it('駒を進めた位置の筋段駒の名前が読み上げられること', () => {
    const sente = new Sente('先手')
    const te = new Te(new Masu(7, '七'), new Masu(7, '六'), sente.id, new Fuhyou(new Masu(7, '七')), false, false)

    expect(te.call()).toBe('7六歩')
  })
})
