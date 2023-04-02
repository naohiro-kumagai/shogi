import { Dan } from './Dan'
import { Suji } from './Suji'
import { ValueObject } from '~~/domain/ValueObject'

export class Masu extends ValueObject {
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
