import { Taikyoku } from ".";
import { TaikyokuId } from "./TaikyokuId";

export interface ITaikyokuRepository {
  /**
   * 対局を1件作成する
   * @param taikyoku 対局
   */
  create (taikyoku: Taikyoku): Promise<void>

  /**
   * 対局を1件取得する
   * @param id 対局ID
   */
  findByTaikyokuId (id: TaikyokuId): Promise<Taikyoku | undefined>
}
