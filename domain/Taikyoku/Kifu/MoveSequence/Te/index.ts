import { Koma } from '~~/domain/Koma'
import { UserId } from '~~/domain/User/UserId'
import { ValueObject } from '~~/domain/ValueObject'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'
import { Namagoma } from '~~/domain/Koma/NamaGoma'
import { MissingConditionsError } from '~~/domain/DomainError'

/**
 * 指し手、打ち手
 */
export class Te extends ValueObject {
  constructor (
    private _beforePosition: Masu,
    private _afterPosition: Masu,
    private _userId: UserId,
    private _koma: Koma,
    private _isPromoted: boolean,
    private _isPlacement: boolean
  ) {
    super()
    if (_isPromoted && _isPlacement) { throw new MissingConditionsError('打ち手と成りは同時には起こりえません') }
    if (_isPlacement && !(_koma instanceof Namagoma) && !_afterPosition.canPlacement()) { throw new MissingConditionsError('この駒は打てません') }
    if (_isPromoted && _koma instanceof Namagoma && !_koma.canPromote()) { throw new MissingConditionsError('この駒は成れません') }
    // TODO: 打ち歩詰めはできません
  }

  /**
   * 指し手の文字列表現
   * @returns 指し手の文字列表現
   */
  call (): string {
    return `${this._afterPosition.call()}${this._koma.name}${this._isPromoted ? '成' : ''}${this._isPlacement ? '打' : ''}`
  }
}
