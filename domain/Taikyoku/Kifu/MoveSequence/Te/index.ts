import { Koma } from '../../../../Koma'
// import { ValueObject } from '../../../../ValueObject'
import { Masu } from '../../../../Taikyoku/ShogiBoard/Masu'
import { Namagoma } from '../../../../Koma/NamaGoma'
import { MissingConditionsError } from '../../../../DomainError'
import { Komadai } from '../../../../Taikyoku/ShogiBoard/Komadai'

/**
 * 指し手、打ち手
 */
export class Te {
  private _teNumber: number

  constructor (
    private _beforePosition: Masu | Komadai,
    private _afterPosition: Masu,
    private _koma: Koma,
    private _isPromoted: boolean,
    private _isPlacement: boolean,
    teNumber?: number
  ) {
    if (_isPromoted && _isPlacement) { throw new MissingConditionsError('打ち手と成りは同時には起こりえません') }
    if (_beforePosition instanceof Masu && _isPlacement && _isPlacement) { throw new MissingConditionsError('打ち手は駒台の駒のみです') }
    if (_beforePosition && _beforePosition.equal(_afterPosition)) { throw new MissingConditionsError('駒を動かしていません') }
    if (_isPlacement && !(_koma instanceof Namagoma) && !_afterPosition.canPlacement()) { throw new MissingConditionsError('この駒は打てません') }
    if (_isPromoted && _koma instanceof Namagoma && !_afterPosition.canPromote()) { throw new MissingConditionsError('この駒は成れません') }
    if (teNumber) {
      this._teNumber = teNumber
    } else {
      this._teNumber = 0
    }
    if (_isPlacement) { // 打ち手の場合
      // TODO: 駒台から駒を取り除く
      if (_beforePosition instanceof Komadai) {
        _beforePosition.remove(_koma)
      }
    }
    // TODO: 打ち歩詰めはできません
    // TODO: 2歩はできません
  }

  /**
   * 指し手の文字列表現
   * @returns 指し手の文字列表現
   */
  call (): string {
    // TODO: 先手、後手に応じて☗、☖を付与する

    // 奇数が先手、偶数が後手
    if (this._teNumber % 2 === 1) {
      return `☖ ${this._afterPosition.call()}${this._koma.name}${this._isPromoted ? '成' : ''}${this._isPlacement ? '打' : ''}`
    } else {
      return `☗ ${this._afterPosition.call()}${this._koma.name}${this._isPromoted ? '成' : ''}${this._isPlacement ? '打' : ''}`
    }
  }
}
