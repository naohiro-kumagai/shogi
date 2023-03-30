/**
 * 値オブジェクト
 */
export abstract class ValueObject {
  [key: string]: any

  /**
   * 自身が持っているフィールドの取得
   * @returns 自身が持っているフィールドのリスト
   */
  private getFields (): Array<string> {
    return Object.keys(this)
  }

  /**
   * 同一性の検証
   * @param other 検証する他の値
   * @returns 判定結果
   */
  equal (other: ValueObject): boolean {
    if (this.constructor !== other.constructor) {
      return false // クラス名が一致しない場合は false を返す
    }
    const fields = this.getFields()
    for (const field of fields) {
      if (this[field] !== other[field]) {
        return false
      }
    }
    return true
  }
}
