import { Koma, MovementRange } from '..'
import { Namagoma } from '../NamaGoma'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'

export abstract class Narigoma extends Koma {
  constructor (
    protected _position: Masu,
    protected _movementRange: MovementRange
  ) {
    super(_position, _movementRange)
  }

  abstract demote (): Namagoma
}
