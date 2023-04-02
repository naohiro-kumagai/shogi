import { MissingConditionsError } from '../DomainError'
import { UserId } from '../User/UserId'
import { ShogiBoard } from './ShogiBoard'
import { TaikyokuId } from './TaikyokuId'
import { TaikyokuStatus } from './TaikyokuStatus'
import { Finished } from './TaikyokuStatus/Finished'
import { Matchmaking } from './TaikyokuStatus/Matchmaking'
import { Playing } from './TaikyokuStatus/Playing'

/**
 * 対局
 */
export class Taikyoku {
  public readonly name: string
  private _status: TaikyokuStatus
  public board: ShogiBoard = new ShogiBoard()
  public kifu: Kifu
  public senteId?: UserId
  public goteId?: UserId
  public readonly id: TaikyokuId

  get status () {
    return this._status
  }

  constructor ({ name, senteId, goteId, id }: { name: string, senteId?: UserId, goteId?: UserId, id?: TaikyokuId }) {
    this.name = name
    this._status = new Matchmaking() // 新規作成時は対局相手募集中
    if (senteId) { this.senteId = senteId }
    if (goteId) { this.goteId = goteId }
    this.id = new TaikyokuId()
    if (id) { this.id = id }
  }

  /**
   * 対局開始
   */
  start (): void {
    if (!this.isReadyToStart()) { throw new MissingConditionsError('開始するためにはプレイヤーが足りません') }
    this._status = new Playing()
  }

  /**
   * 対局終了
   */
  finish () {
    this._status = new Finished()
  }

  /**
   * 対局開始の条件を満たしているか
   * @returns 対局開始できるかどうか
   */
  private isReadyToStart (): boolean {
    return Boolean(this.senteId && this.goteId)
  }
}
