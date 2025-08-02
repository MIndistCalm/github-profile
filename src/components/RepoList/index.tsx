import type { Repo } from '@/App'
import { RepoCard } from '../RepoCard'

interface RepoListProps {
  repos: Repo[] | null
}

export const RepoList = ({ repos }: RepoListProps) => {
  if (!repos || repos.length === 0) return <div>No repositories found</div>

  return (
    <div className="flex flex-row gap-4 flex-wrap items-stretch justify-center">
      {repos.map((repo, index) => (
        <RepoCard key={repo.id} repo={repo} idx={index} />
      ))}
    </div>
  )
}
