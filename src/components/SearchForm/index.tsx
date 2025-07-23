import type { GitHubUser } from '@/App'
import { Profile } from '../Profile'
import UserSearch from '../UserSearch'

interface SearchFormProps {
  loading?: boolean
  error?: string
  userData: GitHubUser | null
  hasRepos?: boolean
  onSearch: (username: string) => void
  onShowRepos?: VoidFunction
}

export const SearchForm = ({
  loading = false,
  error,
  userData,
  hasRepos = false,
  onSearch,
  onShowRepos = () => {},
}: SearchFormProps) => {
  return (
    <div className="max-w-2/3 w-full mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg dark:bg-stone-700 dark:text-white">
      <h1 className="text-5xl font-bold text-center mb-6">GitHub Профиль</h1>
      <UserSearch onSearch={onSearch} />
      {loading && <p className="text-center text-stone-500">Загрузка...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {userData && (
        <Profile
          avatarUrl={userData.avatar_url}
          name={userData.name}
          login={userData.login}
          bio={userData.bio}
          publicRepos={userData.public_repos}
          followers={userData.followers}
          following={userData.following}
          hasRepos={hasRepos}
          onShowRepos={onShowRepos}
        />
      )}
    </div>
  )
}
