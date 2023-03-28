import { ulid } from 'ulid'

/**
 * 対局ID
 */
export class TaikyokuId {
  private _value: string

  constructor (value?: string) {
    this._value = ulid()
    if (value) { this._value = value }
  }
}
