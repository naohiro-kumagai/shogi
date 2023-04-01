class DomainError extends Error {
  constructor (e?: string) {
    super(e)
    this.name = new.target.name
  }
}

/** バリデーションエラー */
export class ValidationError extends DomainError {}
/** 実行するための条件不足 */
export class MissingConditionsError extends DomainError {}

// バリデーションエラー：ValidationError
// 一意性エラー：DuplicateError
// 資源が見つからないエラー：NotFoundError
// 許可されていない操作エラー：UnauthorizedError
// データベースエラー：DatabaseError
// サーバーエラー：InternalServerError
