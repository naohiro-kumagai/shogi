import { TaikyokuId } from "~/domain/Taikyoku/TaikyokuId"
import { Taikyoku } from "~/domain/Taikyoku"
import { UserId } from "~/domain/User/UserId"

/** 
 * 対局一覧ページ
 */
const TaikyokuListPage = () => {
  const firstTaikyokuId = '01HJXEMYFRKTBK9VMQTB2EJC6Q'
  const firstTaikyoku = new Taikyoku({
    name: '最初の対局',
    comment: '最初の対局です',
    senteId: new UserId(),
    goteId: new UserId(),
    id: new TaikyokuId(firstTaikyokuId)
  })
  // firstTaikyoku.start()
  // firstTaikyoku.finish()
  console.log({ firstTaikyoku: firstTaikyoku.status })
  const taikyokuList = [
    {
      id: firstTaikyokuId,
      title: firstTaikyoku.name,
      comment: firstTaikyoku.comment,
      status: firstTaikyoku.status.value,
      player: '1/2',
      spectator: 3,
    },
    // {
    //   id: 2,
    //   title: '部屋2',
    //   comment: 'コメント',
    //   player: '1/2',
    //   spectator: 3,
    // },
    // {
    //   id: 3,
    //   title: '部屋3',
    //   comment: 'コメント',
    //   player: '1/2',
    //   spectator: 3,
    // },
    // {
    //   id: 4,
    //   title: '部屋4',
    //   comment: 'コメント',
    //   player: '1/2',
    //   spectator: 3,
    // },
    // {
    //   id: 5,
    //   title: '部屋5',
    //   comment: 'コメント',
    //   player: '1/2',
    //   spectator: 3,
    // },
  ];

  return (
    <div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          対局一覧
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        { taikyokuList.map((taikyoku) => {
          return (<a
            href={`/taikyoku/${taikyoku.id}`}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
            key={taikyoku.id}
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {taikyoku.title + ' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
  
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {taikyoku.comment}
            </p>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              状況 {' '}
              {taikyoku.status}
            </p>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              プレイヤー {' '}
              {taikyoku.player}
            </p>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              観客 {' '}
              {taikyoku.spectator}人
            </p>
          </a>)
        }) }
      </div>
    </div>
  )
}

export default TaikyokuListPage;
