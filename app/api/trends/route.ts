import { NextRequest, NextResponse } from 'next/server'

// サンプルデータ - 実装後はリアルAPIに置き換える
const sampleTrends = {
  updated_at: new Date().toISOString(),
  top_word: '箱根駅伝',
  ranking: [
    '箱根駅伝',
    'OpenAI新モデル',
    'Nintendo Switch 2',
    '成人の日',
    'iOS 18.2',
    '映画公開',
    'SNS新機能',
    'AI技術',
    'セール情報',
    'スポーツイベント',
    'ゲーム新作',
    'アニメ放送',
    'ドラマ放映',
    '企業ニュース',
    '芸能ニュース',
    '天気予報',
    'トラブル情報',
    'イベント情報',
    'キャンペーン',
    '記念日',
  ],
}

export async function GET(_request: NextRequest) {
  try {
    // 実装: X API、Google Trends、YouTube RSS、TikTok、Yahoo、Instagramから
    // リアルタイムトレンドを取得

    return NextResponse.json(sampleTrends)
  } catch (error) {
    return NextResponse.json(
      { error: 'トレンド取得に失敗しました' },
      { status: 500 }
    )
  }
}
