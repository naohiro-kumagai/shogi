import { MoveSequence } from './MoveSequence'
import { TimeLimit } from './TimeLimit'
import { ValueObject } from '~~/domain/ValueObject'

/**
 * 棋譜
 */
export class Kifu extends ValueObject {
  // 対局開始日時: gameDate
  public startDate: Date
  // 対局終了日時: gameDate
  public finishDate: Date | undefined
  // 持ち時間、持ち時間消費状況: timeLimit, elapsedTimes
  private _timeLimit: TimeLimit = new TimeLimit()
  // 各手の指し手、打ち手: moves
  private _moves: MoveSequence = new MoveSequence()
  // 棋譜の結果（勝ち、負け、引き分けなど）: result
  private _result: string | undefined

  constructor (startDate: Date) {
    super()
    this.startDate = startDate
  }
}
