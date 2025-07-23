import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

interface ProfileProps {
  avatarUrl?: string
  name?: string
  login?: string
  bio?: string
  publicRepos?: number
  followers?: number
  following?: number
  onShowRepos?: VoidFunction
}

export const Profile = ({
  avatarUrl,
  name,
  login,
  bio,
  publicRepos,
  followers,
  following,
  onShowRepos = () => {},
}: ProfileProps) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="flex flex-col items-center gap-4 p-6">
        <Avatar className="w-28 h-28">
          <AvatarImage src={avatarUrl} alt={name || login || 'avatar'} />
          <AvatarFallback>{(name || login || '?').slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-semibold text-stone-900 dark:text-white">{name || 'Имя пользователя'}</h2>
        <p className="text-stone-500 dark:text-stone-300">@{login || 'username'}</p>
        <p className="text-center text-stone-700 dark:text-stone-200 mb-2">{bio || 'Биография пользователя'}</p>
        <div className="flex gap-4 text-sm text-stone-700 dark:text-stone-200">
          <span className="cursor-pointer" onClick={onShowRepos}>
            Репозиториев: <b>{publicRepos ?? '-'}</b>
          </span>
          <span>
            Подписчиков: <b>{followers ?? '-'}</b>
          </span>
          <span>
            Подписок: <b>{following ?? '-'}</b>
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
