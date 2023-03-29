/**
 * 対局ステータス
 */
export class TaikyokuStatus {
  private _value: '対局相手募集中' | '対局中' | '終了'

  constructor (value?: '対局相手募集中' | '対局中' | '終了') {
    if (value) {
      this._value = value
    } else {
      this._value = '対局相手募集中'
    }
  }
}
