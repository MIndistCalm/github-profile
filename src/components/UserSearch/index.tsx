import React, { useState, useEffect, useRef } from 'react'
import { Input } from '@/components/ui/input'

interface UserSearchProps {
  onSearch: (username: string) => void
}

export const UserSearch: React.FC<UserSearchProps> = ({ onSearch }) => {
  const [username, setUsername] = useState('')
  const lastSearched = useRef('')
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (username === lastSearched.current) return
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      if (username !== lastSearched.current) {
        onSearch(username)
        lastSearched.current = username
      }
    }, 500)
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [username, onSearch])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && username.length >= 2 && username !== lastSearched.current) {
      if (debounceRef.current) clearTimeout(debounceRef.current)
      onSearch(username)
      lastSearched.current = username
    }
  }

  return (
    <div className="mb-6 flex flex-col gap-2">
      <div className="flex flex-col sm:flex-row items-start gap-2 [@media(max-width:768px)]:gap-4">
        <div className="flex flex-col gap-2 w-full">
          <Input
            type="text"
            name="username"
            placeholder="Введите GitHub username"
            value={username}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            className="w-full flex-1 text-2xl py-2.5 [@media(max-width:768px)]:text-lg"
          />
        </div>
      </div>
    </div>
  )
}
