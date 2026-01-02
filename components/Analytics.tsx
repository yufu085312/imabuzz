'use client'

import { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface AnalyticsProps {
  word: string
}

interface TimelineData {
  timestamp: string
  count: number
}

interface SNSDistribution {
  X: number
  YouTube: number
  Instagram: number
  TikTok: number
  others: number
}

interface AnalyticsData {
  posts_timeline: TimelineData[]
  sns_distribution: SNSDistribution
}

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']

export default function Analytics({ word }: AnalyticsProps) {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/trends/${encodeURIComponent(word)}`)
        const result = await response.json()
        setData({
          posts_timeline: result.posts_timeline,
          sns_distribution: result.sns_distribution,
        })
      } catch (error) {
        console.error('Failed to fetch analytics:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [word])

  if (loading || !data) {
    return <div className="text-gray-500">読み込み中...</div>
  }

  const chartData = data.posts_timeline.map((item) => ({
    time: new Date(item.timestamp).getHours() + '時',
    posts: item.count,
  }))

  const pieData = Object.entries(data.sns_distribution).map(([name, value]) => ({
    name,
    value,
  }))

  return (
    <div className="space-y-6">
      {/* 投稿数推移グラフ */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">投稿数の推移</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="posts"
              stroke="#FF6B6B"
              strokeWidth={2}
              dot={{ fill: '#FF6B6B', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* SNS比率とタグ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* SNS分布 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            SNSソース比率
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 関連タグ */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">関連タグ</h3>
          <div className="flex flex-wrap gap-2">
            {['話題', 'トレンド', '人気', '注目', '速報', '最新'].map(
              (tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
