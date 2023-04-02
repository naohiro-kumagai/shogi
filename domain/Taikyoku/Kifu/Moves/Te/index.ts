import { Koma } from './Koma'
import { UserId } from '~~/domain/User/UserId'
import { ValueObject } from '~~/domain/ValueObject'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'

export class Te extends ValueObject {
  constructor (
    private _beforePosition: Masu,
    private _afterPosition: Masu,
    private _userId: UserId,
    private _koma: Koma,
    private _isPromoted: boolean,
    private _isPlacement: boolean
  ) {
    super()
  }
}
