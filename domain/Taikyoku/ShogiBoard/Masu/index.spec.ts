import { describe, expect, it } from 'vitest'
import { Masu } from '.'

describe('Masu', () => {
  it('呼び方は1一,3七など筋と段をつなげた形になること', () => {
    const masu = new Masu(1, '一')
    expect(masu.call()).toBe('1一')

    const masu2 = new Masu(3, '七')
    expect(masu2.call()).toBe('3七')
  })
})
