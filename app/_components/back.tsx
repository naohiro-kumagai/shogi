import Link from 'next/link'

/**
 * 戻るボタン
 * @param link 戻るリンク
 */
export const BackComponent = ({ link }: { link: string }) => {
  return (
    <div className="flex top-0 sticky text-white">
      <Link href={link}>
        <button type="button" className="absolute rounded-full text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-2 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <span className="sr-only">Back</span>
        </button>
      </Link>
    </div>
  )
}
