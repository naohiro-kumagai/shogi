import { User } from ".";
import { UserId } from "./UserId";

export interface IUserRepository {
  /**
   * ユーザーを作成する
   * @param user ユーザー
   */
  create(user: User): Promise<void>

  /**
   * ユーザーを1件取得する
   * @param id ユーザーID
   */
  findById(id: UserId): Promise<User| undefined>
}
