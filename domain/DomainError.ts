class DomainError extends Error {
  constructor (e?: string) {
    super(e)
    this.name = new.target.name
  }
}

export class DomainInitializationError extends DomainError {}
