'use client'

interface TrendRankingProps {
  ranking: string[]
}

export default function TrendRanking({ ranking }: TrendRankingProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">トレンドランキング</h3>
      <div className="space-y-2">
        {ranking.slice(1, 21).map((word, index) => (
          <div
            key={index}
            className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
          >
            <span className="text-2xl font-bold text-primary w-10">
              {index + 2}
            </span>
            <span className="text-gray-800 font-medium flex-1 ml-4">{word}</span>
            <span className="text-gray-400 text-sm">→</span>
          </div>
        ))}
      </div>
    </div>
  )
}
