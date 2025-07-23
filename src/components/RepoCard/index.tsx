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
  console.log(repo)
  return (
    <a
      href={repo.html_url}
      target="_blank"
      className={`repo-card cursor-pointer bg-white dark:bg-stone-700 content-stretch rounded-xl p-4 transition-all duration-300 hover:shadow-[0_0_15px_15px] dark:shadow-white shadow-gray-300 hover:z-10 hover:scale-105`}
    >
      <div className="flex flex-row gap-7 justify-between items-start leading-7">
        <span className="font-bold text-lg dark:text-white whitespace-nowrap">{repo.name}</span>
        <div className="flex flex-row gap-1">
          <span className="text-sm opacity-60 dark:text-gray-200">{repo.default_branch}</span>
          <span className="text-sm opacity-60 dark:text-gray-200">
            Created at: {new Date(repo.created_at).getUTCFullYear()}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm opacity-60 dark:text-gray-200">{repo.visibility}</span>
        <span className="text-sm opacity-60 dark:text-gray-200 flex flex-row gap-2 items-center">
          <span>GitHub Pages: </span>
          <div className={`h-4 w-4 rounded-full ${repo.has_pages ? 'bg-emerald-400' : 'bg-red-400'}`} />
        </span>
        <span className="text-sm opacity-60 dark:text-gray-200">{repo.language}</span>
        <span className="text-sm opacity-60 dark:text-gray-200">{repo.license}</span>
        <span className="text-sm opacity-60 dark:text-gray-200">
          Last updated: {new Date(repo.updated_at).getUTCFullYear()}
        </span>
        <span className="text-sm opacity-60 dark:text-gray-200">{repo.description}</span>
      </div>
    </a>
  )
}
