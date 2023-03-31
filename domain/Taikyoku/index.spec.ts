import { describe, expect, it } from 'vitest'
import { Sente } from '../User/Player/Sente'
import { Matchmaking } from './TaikyokuStatus/Matchmaking'
import { Taikyoku } from '.'

describe('Taikyoku', () => {
  it('新規作成時のステータスは対局相手募集中である', () => {
    const sente = new Sente('先手の人')
    const taikyoku = new Taikyoku('最初の対局', sente.id)
    expect(taikyoku.status).toStrictEqual(new Matchmaking())
  })
})
