import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "いまバズ！ - リアルタイムトレンド分析",
  description: "SNS/検索トレンドを横断解析し、今もっとも話題のワードと推移を可視化",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
