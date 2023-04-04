import { CannotMoveError } from '../DomainError'
import { Masu } from '../Taikyoku/ShogiBoard/Masu'
import { ValueObject } from '~~/domain/ValueObject'

type Movement = {
  suji: -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
  dan: -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
}

export type MovementRange = Movement[]

/**
 * 駒
 */
export abstract class Koma extends ValueObject {
  constructor (
    protected readonly _position: Masu,
    protected readonly _movementRange: MovementRange
  ) {
    super()
  }

  /**
   * 移動
   * @param destination 移動先のマス
   */
  abstract move (destination: Masu): Koma

  /**
   * 移動できるかの判定
   * @param destination 移動先
   * @returns 移動できるかどうか
   * @throws {CannotMoveError} 移動できません
   */
  protected canMove (destination: Movement): true {
    if (!this._movementRange.find(obj => obj.suji === destination.suji && obj.dan === destination.dan)) {
      throw new CannotMoveError('移動できません')
    }
    return true
  }
}
