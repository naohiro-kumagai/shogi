import { ulid } from 'ulid'
import { ValidationError } from '../../DomainError'
import { ValueObject } from '../../ValueObject'

/**
 * 対局ID
 */
export class TaikyokuId extends ValueObject {
  private _value: string

  constructor (value = ulid()) {
    super()
    if (/[0-9a-hjkmnp-zA-HJKMNP-Z]{26}/.test(value) === false) { throw new ValidationError('invalid id') }
    this._value = value
  }

  get value () {
    return this._value
  }
}
