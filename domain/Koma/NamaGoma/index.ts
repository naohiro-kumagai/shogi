import { Koma, MovementRange } from '..'
import { Narigoma } from '../Narigoma'
import { Masu } from '~~/domain/Taikyoku/ShogiBoard/Masu'
import { MissingConditionsError } from '~~/domain/DomainError'

/**
 * 成駒
 */
export abstract class Namagoma extends Koma {
  constructor (
    protected _position: Masu,
    protected _movementRange: MovementRange
  ) {
    super(_position, _movementRange)
  }

  /**
   * 成る
   * @return 成駒
   */
  protected promote (): Narigoma {
    if (!this.canPromote()) { throw new MissingConditionsError('この駒は成れません') }
    return this.promoteKoma()
  }

  /**
   * 成るための判定
   * @returns 判定結果
   */
  private canPromote (): boolean {
    // TODO: 先手後手の判定
    return this._position.canPromote()
  }

  /**
   * 成る駒の取得
   * @returns なったあとの駒
   */
  protected abstract promoteKoma (): Narigoma
}
