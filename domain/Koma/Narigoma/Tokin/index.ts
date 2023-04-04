import { Narigoma } from '..'
import { Koma } from '../..'
// import { Fuhyou } from '../../NamaGoma/Fuhyou'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'

export class Tokin extends Narigoma {
  constructor (position: Masu) {
    super(position, [], new Fuhyou(position))
  }

  move (destination: Masu): Koma {
    return new Tokin(destination)
  }
}
