import { TaikyokuId } from "../../Taikyoku/TaikyokuId";
import { User } from "..";
import { UserId } from "../UserId";

// const SizeType = {
//   SMALL: 'small',
//   MEDIUM: 'medium',
//   LARGE: 'large',
// } as const

// type Size = typeof SizeType[keyof typeof SizeType]
// const AllSizeType = Object.values(SizeType)
// console.log({ AllSizeType })

/**
 * 登録者
 */
export class Registrant extends User {
  public watchingTaikyokuId?: TaikyokuId

  constructor(
    name: string,
    id?: UserId,
  ) {
    super(name, id)
  }

  /**
   * 観戦する
   * @param taikyokuId 対局ID
   */
  watch(taikyokuId: TaikyokuId) {
    console.log('観戦する')
    this.watchingTaikyokuId = taikyokuId
  }

  /**
   * 対局を新たに作成する
   */
  createTaikyoku() {
    console.log('対局を新たに作成する')
  }

  /**
   * 対局を開始する
   */
  startTaikyoku() {
    console.log('対局を開始する')
    this.watchingTaikyokuId = undefined
    // return new Player(this.name)
  }
}
