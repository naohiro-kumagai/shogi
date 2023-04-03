import { describe, expect, it } from 'vitest'
import { ShogiBoard } from '.'

describe('ShogiBoard', () => {
  it('初期化状態で81マス持っていること', () => {
    const board = new ShogiBoard()
    expect(board.masuList.length).toBe(81)
  })
})
