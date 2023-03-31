import { UserId } from '../User/UserId'
import { ShogiBoard } from './ShogiBoard'
import { TaikyokuId } from './TaikyokuId'
import { TaikyokuStatus } from './TaikyokuStatus'
import { Matchmaking } from './TaikyokuStatus/Matchmaking'

/**
 * 対局
 */
export class Taikyoku {
  public readonly name: string
  public readonly status: TaikyokuStatus
  public board: ShogiBoard = new ShogiBoard()
  public senteId?: UserId
  public goteId?: UserId
  public readonly id: TaikyokuId

  constructor (name: string, senteId?: UserId, goteId?: UserId, id?: string) {
    this.name = name
    this.status = new Matchmaking() // 新規作成時は対局相手募集中
    if (senteId) { this.senteId = senteId }
    if (goteId) { this.goteId = goteId }
    this.id = new TaikyokuId()
    if (id) { this.id = new TaikyokuId(id) }
  }
}
