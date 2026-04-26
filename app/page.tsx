import Link from 'next/link';
import { newsItems } from '@/components/layout/site-data';

export default function HomePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h2>About</h2>


          <p>情報系の大学生として新年度を迎えた今、まさに大きなスタートラインにいると感じています。</p>
          <p>これから、コンピュータサイエンス、Web技術などの幅広いソフトウェア技術をより深く学修し、より大きく実践できる人材に成長したいです。</p>


          <ul>
            <li>技術ブログでの知識のアウトプット</li>
            <li>YouTubeでのプレゼンテーション</li>
            <li>エンジニアイベントへの参加</li>
            <li>インターンシップ</li>
            <li>地域貢献活動</li>
            <li>大規模アプリケーションの個人開発・デプロイ</li>
            <li>生成AIの積極的な活用</li>
          </ul>

          <p>
            これらの活動を通して、将来は社会に対してより大きな価値を届けることができる人材になりたいです。
          </p>

          <p>
            よろしくお願いします。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Pick Up News</h2>
          <div className="grid">
            {newsItems.slice(0, 4).map((item) => (
              <article key={item.title} className="card">
                <img src="/index_files/SHIKAO-150x150.jpg" alt="news thumbnail" />
                <div className="card__body">
                  <p className="card__meta">{item.date}</p>
                  <h3 className="card__title">{item.title}</h3>
                  <p className="card__text">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            <Link href="/news">ニュース一覧を見る →</Link>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Contact</h2>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeEOqKvaCPFEPQSpZPiAxtIuj4-oAlSZHf0zpkTwsViMusnOA/viewform?embedded=true" width="640" height="250" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
        </div>
      </section>
    </>
  );
}
