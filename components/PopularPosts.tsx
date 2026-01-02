'use client'

import { useEffect, useState } from 'react'

interface Post {
  id: string
  platform: string
  text: string
  likes: number
  url: string
}

interface PopularPostsProps {
  word: string
}

export default function PopularPosts({ word }: PopularPostsProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/trends/${encodeURIComponent(word)}`)
        const result = await response.json()
        setPosts(result.popular_posts || [])
      } catch (error) {
        console.error('Failed to fetch popular posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [word])

  if (loading) {
    return <div className="text-gray-500">読み込み中...</div>
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">人気投稿ピックアップ</h3>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            {/* インフィード広告を挿入 (5位・10位・15位の後) */}
            {(index === 4 || index === 9 || index === 14) && (
              <div className="mb-4 bg-gray-100 rounded p-3 text-center text-gray-500 text-sm">
                広告エリア
              </div>
            )}

            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className="inline-block bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {post.platform}
                  </span>
                </div>
                <p className="text-gray-800 mb-3">{post.text}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>❤️ {post.likes.toLocaleString()}</span>
                </div>
              </div>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm font-medium flex-shrink-0"
              >
                表示
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
