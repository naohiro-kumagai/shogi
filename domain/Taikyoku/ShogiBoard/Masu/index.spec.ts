import { describe, expect, it } from 'vitest'
import { Suji } from './Suji'
import { Dan } from './Dan'
import { Masu } from '.'

describe('Masu', () => {
  it('呼び方は1一,3七など筋と段をつなげた形になること', () => {
    const masu = new Masu(new Suji(1), new Dan('一'))
    expect(masu.call()).toBe('1一')

    const masu2 = new Masu(new Suji(3), new Dan('七'))
    expect(masu2.call()).toBe('3七')
  })
})
