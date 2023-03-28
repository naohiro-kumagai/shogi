/**
 * ユーザー
 */
export abstract class User {
  public name: string

  constructor (name: string) {
    this.name = name
  }
}
