import { BackComponent } from "~/app/_components/back";

const TaikyokuPage = ({ params }: { params: { taikyokuId: string } }) => {
  console.log({ params })

  return (
    <div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* 左上に戻るボタン */}
        <div className="fixed left-0">
          <BackComponent link="/taikyoku" />
        </div>

        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          対局の詳細
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p>対局のスラッグ: {params.taikyokuId}</p>
      </div>
    </div>
  );
}

export default TaikyokuPage;
