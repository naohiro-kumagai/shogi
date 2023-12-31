import { TaikyokuId } from '../../Taikyoku/TaikyokuId'
import { User } from '..'
import { Player } from '../Player'

/**
 * 観客
 */
export class Audience extends User {
  /**
   * 観戦中の対局ID
   */
  public watchingTaikyokuId?: TaikyokuId
}
