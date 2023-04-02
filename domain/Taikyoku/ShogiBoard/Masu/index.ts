import { Position } from '../../Kifu/Moves/Te/Position'
import { ValueObject } from '~~/domain/ValueObject'

export class Masu extends ValueObject {
  constructor (
    private _value: Position
  ) {
    super()
  }
}
