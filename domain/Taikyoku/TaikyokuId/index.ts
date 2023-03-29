import { ulid } from 'ulid'

/**
 * 対局ID
 */
export class TaikyokuId {
  private _value: string

  constructor (value?: string) {
    if (value) {
      this._value = value
    } else {
      this._value = ulid()
    }
  }
}
