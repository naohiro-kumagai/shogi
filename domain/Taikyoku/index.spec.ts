import { describe, expect, it, vi } from 'vitest'
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
    // Given
    const sente = new Sente('Alice')
    const taikyoku = new Taikyoku({ name: '最初の対局', senteId: sente.id })
    // When
    const status = taikyoku.status
    // Then
    expect(status).toStrictEqual(new Matchmaking())
    expect(status.equal(new Matchmaking())).toBe(true)
  })

  it('対局を開始するにはプレイヤーが2人揃う必要がある', () => {
    // Given
    const sente = new Sente('Alice')
    const taikyoku = new Taikyoku({ name: '最初の対局', senteId: sente.id })
    // When
    // Then
    expect(() => taikyoku.start()).toThrow(new MissingConditionsError('開始するためにはプレイヤーが足りません'))
  })

  it('対局を開始するとステータスは"対局中"となる', () => {
    // Given
    const sente = new Sente('Alice')
    const taikyoku = new Taikyoku({ name: '最初の対局', senteId: sente.id })
    const gote = new Gote('Bob')
    taikyoku.goteId = gote.id

    expect(taikyoku.kifu).toBe(undefined) // start前は棋譜がセットアップされていない

    const timer = vi.useFakeTimers() // 時間を停止
    const now = new Date()

    // When
    taikyoku.start()

    timer.advanceTimersByTime(10_000) // 時間を10秒すすめる

    // Then
    expect(taikyoku.status.equal(new Playing())).toBe(true) // start後は対局中となる
    expect(taikyoku.kifu instanceof Kifu).toBe(true) // start後は棋譜がセットアップされている
    expect(taikyoku.kifu?.startDate).toStrictEqual(now) // start時刻が棋譜に記録されている

    // 後片付け
    timer.useRealTimers() // 時間をもとに戻す
  })

  it('対局を終了するとステータスは"対局終了"となる', () => {
    // Given
    const sente = new Sente('Alice')
    const gote = new Gote('Bob')
    const taikyoku = new Taikyoku({ name: '最初の対局', senteId: sente.id, goteId: gote.id })

    const timer = vi.useFakeTimers() // 時間を停止
    taikyoku.start()

    timer.advanceTimersByTime(10_000) // 時間を10秒すすめる

    const now = new Date()

    // When
    taikyoku.finish()

    // Then
    expect(taikyoku.status.equal(new Finished())).toBe(true) // finish後は対局終了となる
    expect(taikyoku.kifu?.finishDate).toStrictEqual(now) // start時刻が棋譜に記録されている

    // 後片付け
    timer.useRealTimers() // 時間をもとに戻す
  })
})
