import { Position } from './Position'
import { Koma } from './Koma'
import { UserId } from '~~/domain/User/UserId'
import { ValueObject } from '~~/domain/ValueObject'

export class Te extends ValueObject {
  constructor (
    private _beforePosition: Position,
    private _afterPosition: Position,
    private _userId: UserId,
    private _koma: Koma,
    private _isPromoted: boolean,
    private _isPlacement: boolean
  ) {
    super()
  }
}
