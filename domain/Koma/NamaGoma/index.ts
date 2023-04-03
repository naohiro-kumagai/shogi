import { Koma, MovementRange } from '..'
import { Narigoma } from '../Narigoma'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'

export abstract class Namagoma extends Koma {
  constructor (
    protected _position: Masu,
    protected _movementRange: MovementRange,
    protected _narigoma: Narigoma
  ) {
    super(_position, _movementRange)
  }
}
