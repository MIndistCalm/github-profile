import type { Repo } from '@/App'

interface RepoCardProps {
  repo: Repo
  idx: number
}

export const RepoCard = ({ repo, idx }: RepoCardProps) => {
  //   const [size, setSize] = useState<string>('')

  //   useEffect(() => {
  //     const sizes = ['col-span-1 row-span-1', 'col-span-2 row-span-1', 'col-span-1 row-span-2', 'col-span-2 row-span-2']
  //     setSize(sizes[Math.floor(Math.random() * sizes.length)])
  //   }, [])

  return (
    <div
      className={`mb-3 repo-card cursor-pointer flex-1 h-full bg-stone-700 rounded-xl p-4 transition-all duration-300 hover:shadow-[0_0_5px_5px] shadow-white hover:z-10 hover:scale-105`}
    >
      <div className="flex flex-row gap-1 justify-between items-center leading-7">
        <span className="font-bold text-lg dark:text-white">{repo.name}</span>
        <span className="text-sm opacity-60 dark:text-gray-200">{new Date(repo.created_at).getUTCFullYear()}</span>
      </div>
      <span className="text-sm opacity-60 dark:text-gray-200">{repo.description}</span>
    </div>
  )
}
