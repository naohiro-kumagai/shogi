import { SujiType } from '../Suji'
import { DanType } from '../Dan'
import { ValueObject } from '~~/domain/ValueObject'

export class Position extends ValueObject {
  constructor (
    public readonly suji: SujiType,
    public readonly dan: DanType
  ) {
    super()
  }
}
