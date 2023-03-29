import { UserId } from './UserId'

/**
 * ユーザー
 */
export abstract class User {
  public name: string
  public id: UserId

  constructor (name: string, id?: string) {
    this.name = name
    if (id) {
      this.id = new UserId(id)
    } else {
      this.id = new UserId()
    }
  }
}
