import { Namagoma } from '..'
import { Koma } from '../..'
import { Narigoma } from '../../Narigoma'
import { Tokin } from '../../Narigoma/Tokin'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'

export class Fuhyou extends Namagoma {
  constructor (position: Masu) {
    super(position, [{ suji: 0, dan: -1 }])
  }

  move (destination: Masu): Koma {
    if (!this.canMove(destination.diff(this._position))) { return this }
    return new Fuhyou(destination)
  }

  promote (): Narigoma {
    return new Tokin(this._position)
  }
}
