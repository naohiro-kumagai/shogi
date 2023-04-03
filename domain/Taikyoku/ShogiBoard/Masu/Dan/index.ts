import { ValueObject } from '~~/domain/ValueObject'

/**
 * 段
 */
export class Dan extends ValueObject {
  constructor (
    public readonly value: '一' | '二' | '三' | '四' | '五' | '六' | '七' | '八' | '九'
  ) {
    super()
  }
}
