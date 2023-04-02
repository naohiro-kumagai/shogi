import { describe, expect, it } from 'vitest'
import { ShogiBoard } from '.'

describe('ShogiBoard', () => {
  it('初期化状態で81マス持っていること', () => {
    const board = new ShogiBoard()
    console.log(JSON.stringify(board, null, 2))
    expect(board.masuList.length).toBe(81)
  })
})
