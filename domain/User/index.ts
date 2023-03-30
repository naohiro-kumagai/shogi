import { UserId } from './UserId'

/**
 * ユーザー
 */
export abstract class User {
  public name: string
  public id: UserId

  constructor (name: string, id?: UserId) {
    this.name = name
    if (id) {
      this.id = id
    } else {
      this.id = new UserId()
    }
  }
}
