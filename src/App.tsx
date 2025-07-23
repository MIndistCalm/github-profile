import { useState } from 'react'
import ThemeToggle from './components/ThemeToggle'
import { SearchForm } from './components/SearchForm'
import { RepoList } from './components/RepoList'

export interface GitHubUser {
  avatar_url: string
  name: string
  login: string
  bio: string
  public_repos: number
  followers: number
  following: number
  repos_url: string
}

export interface Repo {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  html_url: string
  description: string
  url: string
  created_at: string
  updated_at: string
  pushed_at: string
  git_url: string
  ssh_url: string
  clone_url: string
  size: number
  language: string
  has_pages: boolean
  license: null
  topics: string[]
  visibility: string
  default_branch: string
}

function App() {
  const [userData, setUserData] = useState<GitHubUser | null>(null)
  const [reposData, setReposData] = useState<Repo[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (username: string) => {
    setUserData(null)
    setReposData(null)
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`https://api.github.com/users/${username}`)
      if (!res.ok) throw new Error('Пользователь не найден')
      const data = await res.json()
      setUserData(data)
    } catch (e: any) {
      setError(e.message || 'Ошибка запроса')
    } finally {
      setLoading(false)
    }
  }

  const handleShowRepos = async () => {
    try {
      const res = userData && (await fetch(userData?.repos_url))
      if (!res?.ok) throw new Error('Пользователь не найден')
      const data = await res.json()
      setReposData(data)
    } catch (e: any) {
      setError(e.message || 'Ошибка запроса')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-9 bg-gray-100 dark:bg-stone-900 min-h-screen h-full">
      <div className="flex flex-row justify-end">
        <ThemeToggle />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <SearchForm
          loading={loading}
          userData={userData}
          error={error}
          hasRepos={!!reposData}
          onSearch={handleSearch}
          onShowRepos={handleShowRepos}
        />
        {reposData && <RepoList repos={reposData} />}
      </div>
    </div>
  )
}

export default App
