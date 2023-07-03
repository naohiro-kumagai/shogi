import { describe, expect, it } from 'vitest'
import { Position } from '.'

describe('Position', () => {
  it('要素が違うと違うと判定されること', () => {
    const position1 = new Position(1, '一')
    const position2 = new Position(1, '二')

    expect(position1.equal(position2)).toBe(false)
  })
})
