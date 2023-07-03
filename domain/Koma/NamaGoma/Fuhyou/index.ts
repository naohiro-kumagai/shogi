import { Namagoma } from '..'
import { Narigoma } from '../../Narigoma'
import { Tokin } from '../../Narigoma/Tokin'

/**
 * 歩兵
 */
export class Fuhyou extends Namagoma {
  readonly name = '歩'

  constructor () {
    super([{ suji: 0, dan: -1 }])
  }

  protected promoteKoma (): Narigoma {
    return new Tokin()
  }
}
