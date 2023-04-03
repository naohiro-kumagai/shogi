import { Namagoma } from '..'
import { Tokin } from '../../Narigoma/Tokin'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'

export class Fuhyou extends Namagoma {
  constructor (position: Masu) {
    super(position, [], new Tokin(position))
  }

  move (destination: Masu): void {
    this._position = destination
  }
}
