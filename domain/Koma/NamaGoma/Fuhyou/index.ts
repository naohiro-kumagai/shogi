import { Namagoma } from '..'
import { Narigoma } from '../../Narigoma'
import { Tokin } from '../../Narigoma/Tokin'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'

/**
 * 歩兵
 */
export class Fuhyou extends Namagoma {
  readonly name = '歩'

  constructor (position: Masu) {
    super(position, [{ suji: 0, dan: -1 }])
  }

  protected promoteKoma (): Narigoma {
    return new Tokin(this._position)
  }
}
