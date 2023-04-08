import { Dan, DanType } from './Dan'
import { Suji, SujiType } from './Suji'
import { ValueObject } from '~~/domain/ValueObject'

/**
 * マス
 */
export class Masu extends ValueObject {
  private _suji: Suji
  private _dan: Dan

  constructor (
    suji: SujiType,
    dan: DanType
  ) {
    super()
    this._suji = new Suji(suji)
    this._dan = new Dan(dan)
  }

  get dan (): Dan {
    return this._dan
  }

  call (): string {
    return this._suji.value + this._dan.value
  }

  /**
   * 2つのマスの差を計算
   * @param other 差を計算したいマス
   * @returns 筋と段の差の数
   */
  diff (other: Masu) {
    return { suji: this._suji.diff(other._suji), dan: this._dan.diff(other._dan) }
  }

  /**
   * 成ることができるマスかどうか
   * @returns 判定結果
   */
  canPromote (): boolean {
    return this._dan.canPromote()
  }
}
