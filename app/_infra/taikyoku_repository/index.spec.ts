import { describe, it, expect } from "vitest";
import { TaikyokuRepository } from ".";
import { Taikyoku } from "~/domain/Taikyoku";

describe("TaikyokuRepository", () => {
  describe('#create(taikyoku)', () => {
    it('対局を登録できる', async () => {
      const taikyokuRepository = new TaikyokuRepository()
      const taikyoku = new Taikyoku({ name: '最初の対局', comment: '最初のコメント' })
      expect((await taikyokuRepository.create(taikyoku))).toBe(undefined)
      expect((await taikyokuRepository.findByTaikyokuId(taikyoku.id))?.id.equal(taikyoku.id)).toBe(true)
      expect((await taikyokuRepository.findByTaikyokuId(taikyoku.id))?.name).toBe(taikyoku.name)
      expect((await taikyokuRepository.findByTaikyokuId(taikyoku.id))?.comment).toBe(taikyoku.comment)
    })
  })
})
