import { Koma } from '../../../Koma'
import { ValueObject } from '../../../ValueObject'

export class Komadai extends ValueObject {
  constructor (
    private _list: Array<Koma> = []
  ) {
    super()
  }

  get count () {
    return this._list.length
  }

  /**
   * 駒台から駒を取り除く
   * @param koma 駒
   */
  remove (koma: Koma) {
    // this._listからkomaを１つだけ取り除く
    const filterIndex: number[] = []
    this._list.filter((item, index) => {
      if (item.equal(koma)) { filterIndex.push(index) }
      return true
    })
    this._list.splice(filterIndex[0], 1)
  }
}
