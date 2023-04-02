import { ValueObject } from '~~/domain/ValueObject'

export class Suji extends ValueObject {
  constructor (
    public readonly value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  ) {
    super()
  }
}
