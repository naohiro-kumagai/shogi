import { ValueObject } from '~~/domain/ValueObject'

export class Dan extends ValueObject {
  constructor (
    private _value: '一' | '二' | '三' | '四' | '五' | '六' | '七' | '八' | '九'
  ) {
    super()
  }
}
