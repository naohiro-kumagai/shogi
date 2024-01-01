import { TaikyokuId } from '../../Taikyoku/TaikyokuId'
import { User } from '..'
import { Player } from '../Player'
import { UserId } from '../UserId'

/**
 * 観客
 */
export class Audience extends User {
  constructor(
    name: string,
    /**
     * 観戦中の対局ID
     */
    public watchingTaikyokuId: TaikyokuId,
    id?: UserId,
  ) {
    super(name, id)
  }
}
