import { Masu } from '../Taikyoku/ShogiBoard/Masu'
import { ValueObject } from '~~/domain/ValueObject'

export type MovementRange = {
  suji: -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
  dan: -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
}[]

/**
 * 駒
 */
export abstract class Koma extends ValueObject {
  constructor (
    protected _position: Masu,
    protected _movementRange: MovementRange
  ) {
    super()
  }

  abstract move (destination: Masu): void
}
