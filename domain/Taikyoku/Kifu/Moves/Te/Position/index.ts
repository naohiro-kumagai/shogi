import { Dan } from './Dan'
import { Suji } from './Suji'
import { ValueObject } from '~~/domain/ValueObject'

export class Position extends ValueObject {
  constructor (
    private _suji: Suji,
    private _dan: Dan
  ) {
    super()
  }
}
