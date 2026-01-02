'use client'

import { formatDistanceToNow } from 'date-fns'
import { ja } from 'date-fns/locale'

interface HeaderProps {
  lastUpdated: string
  isLoading: boolean
}

export default function Header({ lastUpdated, isLoading }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">
            🔥 いまバズ！
          </h1>
          <p className="text-gray-600 text-sm">
            SNS/検索トレンドをリアルタイム分析
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">
            {isLoading ? '更新中...' : '更新済み'}
          </p>
          <p className="text-xs text-gray-400">
            {lastUpdated
              ? formatDistanceToNow(new Date(lastUpdated), {
                  addSuffix: true,
                  locale: ja,
                })
              : '取得中...'}
          </p>
        </div>
      </div>
    </header>
  )
}
