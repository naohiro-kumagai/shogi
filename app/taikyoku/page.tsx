// 対局 部屋 一覧
const TaikyokuRoomListPage = () => {
  console.log('Sample Page');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          対局部屋一覧
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        { [...Array(30)].map((_, i) => 
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            key={i}
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              部屋 {i + ' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              コメント
            </p>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              プレイヤー
              1/2
            </p>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              観客
              3人
            </p>
          </a>
        ) }
      </div>
    </main>
  )
}

export default TaikyokuRoomListPage;
