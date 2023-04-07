import { Koma, MovementRange } from '..'
import { Namagoma } from '../NamaGoma'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'

/**
 * 成駒
 */
export abstract class Narigoma extends Koma {
  constructor (
    protected _position: Masu,
    protected _movementRange: MovementRange
  ) {
    super(_position, _movementRange)
  }

  /**
   * 成り戻す
   */
  abstract demote (): Namagoma
}
