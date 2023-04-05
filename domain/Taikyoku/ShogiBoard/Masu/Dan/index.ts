import { ValueObject } from '~~/domain/ValueObject'

export type DanType = '一' | '二' | '三' | '四' | '五' | '六' | '七' | '八' | '九'

/**
 * 段
 */
export class Dan extends ValueObject {
  private _mappingNum = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 }

  constructor (
    public readonly value: DanType
  ) {
    super()
  }

  /**
   * 差分計算
   * @param other 計算する段
   * @return 計算結果のnumber
   */
  diff (other: Dan) {
    const thisNum = this._mappingNum[this.value]
    const otherNum = other._mappingNum[other.value]
    return (thisNum - otherNum) as -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  }
}
