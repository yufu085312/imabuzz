import { NextRequest, NextResponse } from 'next/server'

// サンプルデータ - 実装後はリアルAPIに置き換える
const generateSampleData = (word: string) => {
  const baseDate = new Date()
  const posts = Array.from({ length: 24 }, (_, i) => {
    const date = new Date(baseDate)
    date.setHours(date.getHours() - (23 - i))
    return {
      timestamp: date.toISOString(),
      count: Math.floor(Math.random() * 1000) + 500,
    }
  })

  return {
    word,
    posts_timeline: posts,
    sns_distribution: {
      X: 45,
      YouTube: 25,
      Instagram: 15,
      TikTok: 10,
      others: 5,
    },
    related_tags: ['話題', 'トレンド', '人気', '注目', '速報', '最新'],
    popular_posts: [
      {
        id: '1',
        platform: 'X',
        text: `${word}について話題です。詳細はこちら...`,
        likes: 1250,
        shares: 480,
        url: 'https://x.com',
      },
      {
        id: '2',
        platform: 'YouTube',
        text: `${word}の解説動画が人気です`,
        likes: 2100,
        views: 50000,
        url: 'https://youtube.com',
      },
      {
        id: '3',
        platform: 'Instagram',
        text: `${word}関連の投稿が盛り上がっています`,
        likes: 850,
        comments: 120,
        url: 'https://instagram.com',
      },
    ],
  }
}

export async function GET(
  _request: NextRequest,
  { params }: { params: { word: string } }
) {
  try {
    const word = decodeURIComponent(params.word)

    // 実装: 指定されたワードの詳細データを取得
    const data = generateSampleData(word)

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'ワード詳細の取得に失敗しました' },
      { status: 500 }
    )
  }
}
