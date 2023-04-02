import { Koma } from '../Kifu/Moves/Te/Koma'
import { Position } from '../Kifu/Moves/Te/Position'
import { Dan } from '../Kifu/Moves/Te/Position/Dan'
import { Suji } from '../Kifu/Moves/Te/Position/Suji'
import { Masu } from './Masu'
import { ValueObject } from '~~/domain/ValueObject'

export class ShogiBoard extends ValueObject {
  private _masuList: Array<Masu>
  private _senteKomadai: Array<Koma> = []
  private _goteKomadai: Array<Koma> = []

  constructor () {
    super()
    const list = [
      { suji: 1, dan: '一' }, { suji: 2, dan: '一' }, { suji: 3, dan: '一' }, { suji: 4, dan: '一' },
      { suji: 5, dan: '一' }, { suji: 6, dan: '一' }, { suji: 7, dan: '一' }, { suji: 8, dan: '一' }, { suji: 9, dan: '一' },
      { suji: 1, dan: '二' }, { suji: 2, dan: '二' }, { suji: 3, dan: '二' }, { suji: 4, dan: '二' },
      { suji: 5, dan: '二' }, { suji: 6, dan: '二' }, { suji: 7, dan: '二' }, { suji: 8, dan: '二' }, { suji: 9, dan: '二' },
      { suji: 1, dan: '三' }, { suji: 2, dan: '三' }, { suji: 3, dan: '三' }, { suji: 4, dan: '三' },
      { suji: 5, dan: '三' }, { suji: 6, dan: '三' }, { suji: 7, dan: '三' }, { suji: 8, dan: '三' }, { suji: 9, dan: '三' },
      { suji: 1, dan: '四' }, { suji: 2, dan: '四' }, { suji: 3, dan: '四' }, { suji: 4, dan: '四' },
      { suji: 5, dan: '四' }, { suji: 6, dan: '四' }, { suji: 7, dan: '四' }, { suji: 8, dan: '四' }, { suji: 9, dan: '四' },
      { suji: 1, dan: '五' }, { suji: 2, dan: '五' }, { suji: 3, dan: '五' }, { suji: 4, dan: '五' },
      { suji: 5, dan: '五' }, { suji: 6, dan: '五' }, { suji: 7, dan: '五' }, { suji: 8, dan: '五' }, { suji: 9, dan: '五' },
      { suji: 1, dan: '六' }, { suji: 2, dan: '六' }, { suji: 3, dan: '六' }, { suji: 4, dan: '六' },
      { suji: 5, dan: '六' }, { suji: 6, dan: '六' }, { suji: 7, dan: '六' }, { suji: 8, dan: '六' }, { suji: 9, dan: '六' },
      { suji: 1, dan: '七' }, { suji: 2, dan: '七' }, { suji: 3, dan: '七' }, { suji: 4, dan: '七' },
      { suji: 5, dan: '七' }, { suji: 6, dan: '七' }, { suji: 7, dan: '七' }, { suji: 8, dan: '七' }, { suji: 9, dan: '七' },
      { suji: 1, dan: '八' }, { suji: 2, dan: '八' }, { suji: 3, dan: '八' }, { suji: 4, dan: '八' },
      { suji: 5, dan: '八' }, { suji: 6, dan: '八' }, { suji: 7, dan: '八' }, { suji: 8, dan: '八' }, { suji: 9, dan: '八' },
      { suji: 1, dan: '九' }, { suji: 2, dan: '九' }, { suji: 3, dan: '九' }, { suji: 4, dan: '九' },
      { suji: 5, dan: '九' }, { suji: 6, dan: '九' }, { suji: 7, dan: '九' }, { suji: 8, dan: '九' }, { suji: 9, dan: '九' }
    ]

    this._masuList = list.map((position: any) => new Masu(new Position(new Suji(position.suji), new Dan(position.dan))))
  }

  get masuList () {
    return this._masuList
  }
}
