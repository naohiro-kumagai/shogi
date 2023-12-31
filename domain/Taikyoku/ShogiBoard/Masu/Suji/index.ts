import { ValueObject } from '../../../../ValueObject'

export type SujiType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

/**
 * 筋
 */
export class Suji extends ValueObject {
  constructor (
    public readonly value: SujiType
  ) {
    super()
  }

  /**
   * 差分計算
   * @param other 計算する筋
   * @return 計算結果のnumber
   */
  diff (other: Suji) {
    return (this.value - other.value) as -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  }
}
