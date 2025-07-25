import type { GitHubUser } from '@/App'
import { UserSearch } from '../UserSearch'
import { Profile } from '../Profile'

interface SearchBoxProps {
  loading?: boolean
  error?: string
  userData: GitHubUser | null
  onSearch: (username: string) => void
}

export const SearchBox = ({ loading = false, error, userData, onSearch }: SearchBoxProps) => {
  return (
    <div className="max-w-2/3 w-full mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg dark:bg-stone-700 dark:text-white">
      <h1 className="text-5xl font-bold text-center mb-6 [@media(max-width:768px)]:text-2xl">GitHub Профиль</h1>
      <UserSearch onSearch={onSearch} />
      {loading && <p className="text-center text-stone-500">Загрузка...</p>}
      {error && <p className="text-center text-xl text-stone-500">{error}</p>}
      {userData && (
        <Profile
          avatarUrl={userData.avatar_url}
          name={userData.name}
          login={userData.login}
          bio={userData.bio}
          publicRepos={userData.public_repos}
          followers={userData.followers}
          following={userData.following}
        />
      )}
    </div>
  )
}
