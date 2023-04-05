import { Namagoma } from '..'
import { Narigoma } from '../../Narigoma'
import { Tokin } from '../../Narigoma/Tokin'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'

export class Fuhyou extends Namagoma {
  constructor (position: Masu) {
    super(position, [{ suji: 0, dan: -1 }])
  }

  promote (): Narigoma {
    return new Tokin(this._position)
  }
}
