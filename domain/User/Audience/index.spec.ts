import { describe, expect, it } from 'vitest'
import { Audience } from '.'
import { ValidationError } from '../../DomainError'
import { TaikyokuId } from '../../Taikyoku/TaikyokuId'
import { Player } from '../Player'

describe('Audience', () => {
  it('IDを指定すると同じIDがセットされる', () => {
    const audience = new Audience('Alice')
    expect(audience.id.equal(new Audience('Alice', audience.id).id)).toBe(true)
  })

  it('名前を入力しないとエラーとなる', () => {
    expect(() => new Audience('')).toThrow(new ValidationError('名前を入力してください。'))
  })

  describe('#watch(taikyokuId)', () => {
    it('観客は存在する対局を選んで観戦できる', () => {
      const audience = new Audience('Alice')
      const taikyokuId = new TaikyokuId()

      expect(audience.watchingTaikyokuId).toBe(undefined)
      // expect(audience.watch(taikyokuId)).toBe(undefined)
      expect(audience.watchingTaikyokuId?.equal(taikyokuId)).toBe(true)
    })
  })
})
