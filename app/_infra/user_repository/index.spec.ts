import { describe, it, expect } from "vitest";
import { UserRepository } from ".";
import { Registrant } from "@/domain/User/Registrant";
import { UserId } from "@/domain/User/UserId";

describe('UserRepository', () => {
  describe('#creare(user)', () => {
    it('ユーザーを登録できる', async () => {
      const userRepository = new UserRepository()
      const user = new Registrant('Alice')
      console.log(user)
      expect(await userRepository.create(user)).toBe(undefined)
      expect(await userRepository.create(user)).toBe(undefined)
      expect((await userRepository.findById(user.id))?.id.equal(user.id)).toBe(true)
      expect((await userRepository.findById(user.id))?.name).toBe(user.name)
    })
  })

  describe('#findById(userId)', () => {
    it('ユーザーをIDで検索できる', async () => {
      const userRepository = new UserRepository()
      const user = new Registrant('Alice')
      expect(await userRepository.create(user)).toBe(undefined)
      expect((await userRepository.findById(user.id))?.id.equal(user.id)).toBe(true)
      expect((await userRepository.findById(user.id))?.name).toBe(user.name)
    })

    it('存在しないユーザーIDを指定するとundefinedが返る', async () => {
      const userRepository = new UserRepository()
      const user = new Registrant('Alice')
      expect(await userRepository.create(user)).toBe(undefined)
      expect(await userRepository.findById(new UserId())).toBe(undefined)
    })
  })
})
