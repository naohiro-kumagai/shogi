import { describe, expect, it } from 'vitest'
import { Masu } from '.'

describe('Masu', () => {
  it('呼び方は1一,3七など筋と段をつなげた形になること', () => {
    const masu = new Masu(1, '一')
    expect(masu.call()).toBe('1一')

    const masu2 = new Masu(3, '七')
    expect(masu2.call()).toBe('3七')
  })

  it('2つのマスの差を計算することができる', () => {
    const masu1 = new Masu(1, '一')
    const masu2 = new Masu(3, '七')
    const diff = masu1.diff(masu2)
    expect(diff).toEqual({ suji: -2, dan: -6 })
  })

  it('成ることができるマスかどうかを判定することができる', () => {
    const masu1 = new Masu(1, '一')
    const masu2 = new Masu(3, '四')
    expect(masu1.canPromote()).toBe(true)
    expect(masu2.canPromote()).toBe(false)
  })
})
