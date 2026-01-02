'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import TopWordDisplay from '@/components/TopWordDisplay'
import TrendRanking from '@/components/TrendRanking'
import Analytics from '@/components/Analytics'
import PopularPosts from '@/components/PopularPosts'
import Footer from '@/components/Footer'
import { useTrendStore } from '@/store/trendStore'

export default function Home() {
  const { trends, fetchTrends, isLoading } = useTrendStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    fetchTrends()

    // 15分ごとに自動更新
    const interval = setInterval(fetchTrends, 15 * 60 * 1000)
    return () => clearInterval(interval)
  }, [fetchTrends])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header lastUpdated={trends.updated_at} isLoading={isLoading} />

      {/* 広告 - Header直下 */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="text-center text-gray-500 text-sm">
            {/* Google AdSense バナー広告を挿入予定 */}
            広告エリア
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* 1位ワード表示 */}
        <TopWordDisplay topWord={trends.top_word} />

        {/* 広告 - 1位ワード直下 */}
        <div className="my-8 bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-center text-gray-500 text-sm">
            {/* Google AdSense バナー広告を挿入予定 */}
            広告エリア
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
          {/* トレンドランキング */}
          <div className="lg:col-span-1">
            <TrendRanking ranking={trends.ranking} />
          </div>

          {/* アナリティクス */}
          <div className="lg:col-span-2">
            <Analytics word={trends.top_word} />
          </div>
        </div>

        {/* 人気投稿 */}
        <PopularPosts word={trends.top_word} />
      </main>

      {/* 広告 - Footer直上 */}
      <div className="bg-white border-t border-gray-200 my-8">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="text-center text-gray-500 text-sm">
            {/* Google AdSense バナー広告を挿入予定 */}
            広告エリア
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
