import { describe, expect, it } from 'vitest'
import { Te } from '.'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'
import { Fuhyou } from '~~/domain/Koma/NamaGoma/Fuhyou'
import { MissingConditionsError } from '~~/domain/DomainError'
import { Komadai } from '~~/domain/Taikyoku/ShogiBoard/Komadai'

describe('Te', () => {
  it('駒を進めた位置の筋段駒の名前が読み上げられること', () => {
    const te = new Te(new Masu(7, '七'), new Masu(7, '六'), new Fuhyou(), false, false, 1)

    expect(te.call()).toBe('☖ 7六歩')
  })

  it('打ち手の場合、駒を打った位置の筋段駒の名前が読み上げられ、駒台から打った駒がなくなっていること', () => {
    const komadai = new Komadai([new Fuhyou()])
    const te = new Te(komadai, new Masu(7, '六'), new Fuhyou(), false, true, 1)

    expect(te.call()).toBe('☖ 7六歩打')
    expect(komadai.count).toBe(0)
  })

  it('駒を成った位置の筋段駒の名前が読み上げられること', () => {
    const te = new Te(new Masu(7, '四'), new Masu(7, '三'), new Fuhyou(), true, false, 1)

    expect(te.call()).toBe('☖ 7三歩成')
  })

  it('不正な手の場合はエラーが発生すること', () => {
    expect(() => new Te(new Masu(7, '七'), new Masu(7, '六'), new Fuhyou(), true, true, 1)).toThrowError(new MissingConditionsError('打ち手と成りは同時には起こりえません'))
    expect(() => new Te(new Masu(7, '七'), new Masu(7, '六'), new Fuhyou(), false, true, 1)).toThrowError(new MissingConditionsError('打ち手は駒台の駒のみです'))
    expect(() => new Te(new Masu(7, '六'), new Masu(7, '六'), new Fuhyou(), false, false, 1)).toThrowError(new MissingConditionsError('駒を動かしていません'))
    // expect(() => new Te(new Masu(7, '七'), new Masu(7, '六'), 1, new Fuhyou(new Masu(7, '六')), false, false)).toThrowError(new MissingConditionsError('この駒は動かせません'))
    expect(() => new Te(new Masu(7, '七'), new Masu(7, '六'), new Fuhyou(), true, false, 1)).toThrowError(new MissingConditionsError('この駒は成れません'))
  })
})
