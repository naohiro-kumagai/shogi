import { ulid } from 'ulid'

/**
 * ユーザーID
 */
export class UserId {
  private _value: string

  constructor (value?: string) {
    if (value) {
      this._value = value
    } else {
      this._value = ulid()
    }
  }
}
