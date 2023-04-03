import { Te } from './Te'
import { ValueObject } from '~~/domain/ValueObject'

/**
 * 移動順序
 */
export class MoveSequence extends ValueObject {
  private _list: Array<Te> = []
}
