import { useState, useMemo } from 'react'
import type { Repo } from '@/App'
import type { FilterType, SortType } from '@/components/Filter'

export function useRepoFilter(reposData: Repo[] | null) {
  const [filter, setFilter] = useState<FilterType>('all')
  const [sort, setSort] = useState<SortType>('created')
  const [language, setLanguage] = useState<string>('')

  const languages = useMemo(() => {
    if (!reposData) return []
    const set = new Set<string>()
    reposData.forEach((repo) => {
      if (repo.language) set.add(repo.language)
    })
    return Array.from(set).sort()
  }, [reposData])

  const filteredRepos = useMemo(() => {
    if (!reposData) return null
    let result = reposData
    if (filter !== 'all') {
      result = result.filter((repo) =>
        filter === 'public' ? repo.visibility === 'public' : repo.visibility === 'private',
      )
    }
    if (language) {
      result = result.filter((repo) => repo.language === language)
    }
    result = [...result].sort((a, b) => {
      if (sort === 'created') {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      }
      if (sort === 'updated') {
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      }
      if (sort === 'name') {
        return a.name.localeCompare(b.name)
      }
      if (sort === 'has_pages') {
        return (b.has_pages ? 1 : 0) - (a.has_pages ? 1 : 0)
      }
      return 0
    })
    return result
  }, [reposData, filter, sort, language])

  return {
    filter,
    sort,
    language,
    languages,
    filteredRepos,
    setFilter,
    setSort,
    setLanguage,
  }
}
