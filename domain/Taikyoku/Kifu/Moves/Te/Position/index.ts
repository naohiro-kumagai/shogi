import { Suji } from './Suji'
import { Dan } from './Dan'
import { ValueObject } from '~~/domain/ValueObject'

export class Position extends ValueObject {
  constructor (
    private _suji: Suji,
    private _dan: Dan
  ) {
    super()
  }

  call (): string {
    return this._suji.value + this._dan.value
  }
}
