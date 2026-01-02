import { create } from 'zustand'

export interface Trend {
  updated_at: string
  top_word: string
  ranking: string[]
}

interface TrendStore {
  trends: Trend
  isLoading: boolean
  fetchTrends: () => Promise<void>
}

export const useTrendStore = create<TrendStore>((set) => ({
  trends: {
    updated_at: new Date().toISOString(),
    top_word: 'ロード中...',
    ranking: [],
  },
  isLoading: false,
  fetchTrends: async () => {
    set({ isLoading: true })
    try {
      const response = await fetch('/api/trends')
      const data = await response.json()
      set({ trends: data, isLoading: false })
    } catch (error) {
      console.error('Failed to fetch trends:', error)
      set({ isLoading: false })
    }
  },
}))
