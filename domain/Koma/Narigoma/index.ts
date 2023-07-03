import { Koma, MovementRange } from '..'
import { Namagoma } from '../NamaGoma'

/**
 * 成駒
 */
export abstract class Narigoma extends Koma {
  constructor (
    protected _movementRange: MovementRange
  ) {
    super(_movementRange)
  }

  /**
   * 成り戻す
   */
  abstract demote (): Namagoma
}
