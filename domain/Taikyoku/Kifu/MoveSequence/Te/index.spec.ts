import { describe, expect, it } from 'vitest'
import { Te } from '.'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'
import { Fuhyou } from '~~/domain/Koma/NamaGoma/Fuhyou'

describe('Te', () => {
  it('駒を進めた位置の筋段駒の名前が読み上げられること', () => {
    const te = new Te(new Masu(7, '七'), new Masu(7, '六'), 1, new Fuhyou(new Masu(7, '七')), false, false)

    expect(te.call()).toBe('☖ 7六歩')
  })

  it('駒を打った位置の筋段駒の名前が読み上げられること', () => {
    const te = new Te(undefined, new Masu(7, '六'), 1, new Fuhyou(new Masu(7, '七')), false, true)

    expect(te.call()).toBe('☖ 7六歩打')
  })

  it('駒を成った位置の筋段駒の名前が読み上げられること', () => {
    const te = new Te(new Masu(7, '四'), new Masu(7, '三'), 1, new Fuhyou(new Masu(7, '三')), true, false)

    expect(te.call()).toBe('☖ 7三歩成')
  })
})
