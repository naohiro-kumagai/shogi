import { describe, expect, it } from 'vitest'
import { Suji } from './Suji'
import { Dan } from './Dan'
import { Position } from '.'

describe('Position', () => {
  it('呼び方は1一,3七など筋と段をつなげた形になること', () => {
    const position = new Position(new Suji(1), new Dan('一'))
    expect(position.call()).toBe('1一')

    const position2 = new Position(new Suji(3), new Dan('七'))
    expect(position2.call()).toBe('3七')
  })
})
