import { describe, expect, it } from 'vitest'
import { Suji } from '.'

describe('Suji', () => {
  it('二つの段の距離の差分を計算することができる', () => {
    // Given
    const dan1 = new Suji(1)
    const dan2 = new Suji(3)
    // When
    const diff = dan1.diff(dan2)
    // Then
    expect(diff).toBe(-2)
  })
})
