import { UserId } from '../User/UserId'
import { ShogiBoard } from './ShogiBoard'
import { TaikyokuId } from './TaikyokuId'
import { TaikyokuStatus } from './TaikyokuStatus'

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

  constructor (name: string, senteId?: string, goteId?: string, id?: string) {
    this.name = name
    this.status = new TaikyokuStatus()
    if (senteId) { this.senteId = new UserId(senteId) }
    if (goteId) { this.goteId = new UserId(goteId) }
    this.id = new TaikyokuId()
    if (id) { this.id = new TaikyokuId(id) }
  }
}
