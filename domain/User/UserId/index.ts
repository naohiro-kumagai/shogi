import { ulid } from 'ulid'
import { ValidationError } from '~~/domain/DomainError'
import { ValueObject } from '~~/domain/ValueObject'

/**
 * ユーザーID
 */
export class UserId extends ValueObject {
  private _value: string

  constructor (value = ulid()) {
    super()
    if (/[0-9a-hjkmnp-zA-HJKMNP-Z]{26}/.test(value) === false) { throw new ValidationError('invalid id') }
    this._value = value
  }
}
