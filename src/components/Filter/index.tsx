import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export type FilterType = 'all' | 'public' | 'private'
export type SortType = 'created' | 'updated' | 'name' | 'has_pages'

interface FilterProps {
  filter: FilterType
  sort: SortType
  language: string
  languages: string[]
  onChange: (params: { filter: FilterType; sort: SortType; language: string }) => void
}

export default function Filter({ filter, sort, language, languages, onChange }: FilterProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto mb-4">
      <CardHeader>
        <CardTitle>Фильтрация и сортировка</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Select value={filter} onValueChange={(v) => onChange({ filter: v as FilterType, sort, language })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Тип репозитория" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Тип</SelectLabel>
                <SelectItem value="all">Все</SelectItem>
                <SelectItem value="public">Публичные</SelectItem>
                <SelectItem value="private">Приватные</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Select value={sort} onValueChange={(v) => onChange({ filter, sort: v as SortType, language })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Сортировка" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Сортировка</SelectLabel>
                <SelectItem value="created">По дате создания</SelectItem>
                <SelectItem value="updated">По обновлению</SelectItem>
                <SelectItem value="name">По имени</SelectItem>
                <SelectItem value="has_pages">По наличию GitHub Pages</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Select
            value={language || 'all'}
            onValueChange={(v) => onChange({ filter, sort, language: v === 'all' ? '' : v })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Язык" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Язык</SelectLabel>
                <SelectItem value="all">Все</SelectItem>
                {languages.map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}
