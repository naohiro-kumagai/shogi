import { describe, expect, it } from 'vitest'
import { Dan } from '.'

describe('Dan', () => {
  it('二つの段の距離の差分を計算することができる', () => {
    // Given
    const dan1 = new Dan('一')
    const dan2 = new Dan('三')
    // When
    const diff = dan1.diff(dan2)
    // Then
    expect(diff).toBe(-2)
  })

  it('成ることができるエリアかどうかを判定することができる', () => {
    // Given
    const dan1 = new Dan('一')
    const dan2 = new Dan('四')
    // When
    const promoteResult1 = dan1.canPromote()
    const promoteResult2 = dan2.canPromote()
    // Then
    expect(promoteResult1).toBe(true)
    expect(promoteResult2).toBe(false)
  })
})
