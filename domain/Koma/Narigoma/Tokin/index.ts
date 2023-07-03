import { Narigoma } from '..'
import { Namagoma } from '../../NamaGoma'
import { Fuhyou } from '../../NamaGoma/Fuhyou'

/**
 * と金
 */
export class Tokin extends Narigoma {
  readonly name = 'と'

  constructor () {
    super([{ suji: 1, dan: -1 }, { suji: 0, dan: -1 }, { suji: -1, dan: -1 }, { suji: 1, dan: 0 }, { suji: -1, dan: 0 }, { suji: 0, dan: 1 }])
  }

  demote (): Namagoma {
    return new Fuhyou()
  }
}
