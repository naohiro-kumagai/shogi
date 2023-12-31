import { describe, it, expect } from "vitest"
import { Registrant } from "."
import { Player } from "../Player"

 describe ('Registrant', () => {
  describe('#createTaikyoku()', () => {
    it('登録者は対局を新たに作成できる', () => {
      const registrant = new Registrant('Alice')
    })
  })

  describe('#startTaikyoku()', () => {
    it('登録者は存在する対局を選んで対局を開始できる', () => {
      const registrant = new Registrant('Alice')
      expect(registrant.createTaikyoku()).toBe(undefined)
      expect(registrant.startTaikyoku()).toBe(undefined)
      expect(registrant instanceof Registrant).toBe(true)
    })
  })

  it.todo('対局するユーザーはプレイヤーとなる', () => {
    const registrant = new Registrant('Alice')
  })
})
