import { Player } from '../User/Player'
import { Gote } from '../User/Player/Gote'
import { Sente } from '../User/Player/Sente'
import { TaikyokuId } from './TaikyokuId'
import { TaikyokuStatus } from './TaikyokuStatus'

/**
 * 対局
 */
export class Taikyoku {
  public readonly name: string
  public readonly taikyokuStatus: TaikyokuStatus
  public sente?: Player
  public gote?: Player
  public readonly id: TaikyokuId

  constructor (name: string, sente?: string, gote?: string, id?: string) {
    this.name = name
    this.taikyokuStatus = new TaikyokuStatus()
    if (sente) { this.sente = new Sente(sente) }
    if (gote) { this.gote = new Gote(gote) }
    this.id = new TaikyokuId()
    if (id) { this.id = new TaikyokuId(id) }
  }
}
