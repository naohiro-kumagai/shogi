import { describe, expect, it } from 'vitest'
import { Sente } from '../User/Player/Sente'
import { Gote } from '../User/Player/Gote'
import { MissingConditionsError } from '../DomainError'
import { Matchmaking } from './TaikyokuStatus/Matchmaking'
import { Playing } from './TaikyokuStatus/Playing'
import { Finished } from './TaikyokuStatus/Finished'
import { Kifu } from './Kifu'
import { Taikyoku } from '.'

describe('Taikyoku', () => {
  it('新規作成時のステータスは"対局相手募集中"である', () => {
    const sente = new Sente('Alice')
    const taikyoku = new Taikyoku({ name: '最初の対局', senteId: sente.id })
    expect(taikyoku.status).toStrictEqual(new Matchmaking())
    expect(taikyoku.status.equal(new Matchmaking())).toBe(true)
  })

  it('対局を開始するにはプレイヤーが2人揃う必要がある', () => {
    const sente = new Sente('Alice')
    const taikyoku = new Taikyoku({ name: '最初の対局', senteId: sente.id })
    expect(() => taikyoku.start()).toThrow(new MissingConditionsError('開始するためにはプレイヤーが足りません'))
  })

  it('対局を開始するとステータスは"対局中"となる', () => {
    const sente = new Sente('Alice')
    const taikyoku = new Taikyoku({ name: '最初の対局', senteId: sente.id })
    const gote = new Gote('Bob')
    taikyoku.goteId = gote.id

    expect(taikyoku.kifu).toBe(undefined) // start前は棋譜がセットアップされていない

    taikyoku.start()

    expect(taikyoku.status.equal(new Playing())).toBe(true) // start後は対局中となる
    expect(taikyoku.kifu instanceof Kifu).toBe(true) // start後は棋譜がセットアップされている
  })

  it('対局を終了するとステータスは"対局終了"となる', () => {
    const sente = new Sente('Alice')
    const gote = new Gote('Bob')
    const taikyoku = new Taikyoku({ name: '最初の対局', senteId: sente.id, goteId: gote.id })
    taikyoku.start()
    taikyoku.finish()

    expect(taikyoku.status.equal(new Finished())).toBe(true)
  })
})
