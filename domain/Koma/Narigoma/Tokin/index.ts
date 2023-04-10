import { Narigoma } from '..'
import { Namagoma } from '../../NamaGoma'
import { Fuhyou } from '../../NamaGoma/Fuhyou'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'

/**
 * と金
 */
export class Tokin extends Narigoma {
  readonly name = 'と'

  constructor (position: Masu) {
    super(position, [{ suji: 1, dan: -1 }, { suji: 0, dan: -1 }, { suji: -1, dan: -1 }, { suji: 1, dan: 0 }, { suji: -1, dan: 0 }, { suji: 0, dan: 1 }])
  }

  demote (): Namagoma {
    return new Fuhyou(this._position)
  }
}
