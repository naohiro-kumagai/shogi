import { describe, expect, it } from 'vitest'
import { Komadai } from '.'
import { Fuhyou } from '~~/domain/Koma/NamaGoma/Fuhyou'

describe('Komadai', () => {
  it('駒台の初期状態では駒がないこと', () => {
    // Given
    const komadai = new Komadai()
    // When
    // Then
    expect(komadai.count).toBe(0)
  })

  it('駒台に駒を置くと駒があること', () => {
    // Given
    const komadai = new Komadai([new Fuhyou()])
    // When
    // Then
    expect(komadai.count).toBe(1)
  })

  it('駒台から駒を取り除くと駒が１つだけ減っていること', () => {
    // Given
    const komadai = new Komadai([new Fuhyou(), new Fuhyou()])
    // When
    komadai.remove(new Fuhyou())
    // Then
    expect(komadai.count).toBe(1)
  })
})
