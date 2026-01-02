'use client'

interface TopWordDisplayProps {
  topWord: string
}

export default function TopWordDisplay({ topWord }: TopWordDisplayProps) {
  return (
    <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-12 text-center mb-8 shadow-lg">
      <p className="text-lg mb-4 opacity-90">今1番話題のワード</p>
      <h2 className="text-6xl md:text-7xl font-bold mb-4 break-words">
        {topWord}
      </h2>
      <p className="text-red-100 text-sm">このワードについての情報が下部に表示されます</p>
    </div>
  )
}
