'use client'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">いまバズ！について</h4>
            <p className="text-gray-300 text-sm">
              SNS/検索トレンドを横断解析し、今もっとも話題のワードと推移を可視化するリアルタイムランキングWebアプリです。
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">リンク</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  利用規約
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">免責事項</h4>
            <p className="text-gray-300 text-sm">
              本アプリは投稿内容の保証は行いません。表示データはリアルタイム性を優先し完全な正確性は保証しないものとします。
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2026 いまバズ！All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
