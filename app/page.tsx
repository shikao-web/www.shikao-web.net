import Link from 'next/link';
import { client } from '@/libs/microcms'


export default async function HomePage() {

  const news_data = await client.get({
    endpoint: "news",
    queries: {
      orders: "-date",
      limit: 4
    },


  });


  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h2>About</h2>


          <p>こんにちは、SHIKAOです。</p>
          <p>これから、コンピュータサイエンス、Web技術などの幅広いソフトウェア技術をさらに深堀りし、より広く実践できる人材に成長したいです。</p>


          <p>
            そして、将来は社会に対してより大きな価値を届けることができる人材になりたいです。
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
            {news_data.contents.map((post: any) => (
              <Link  key={post.id} href={`/news/${post.id}`} className="card" >
                < article key={post.title}>
                  {
                    post.thumbnail ? (
                      <img src={post.thumbnail.url} alt={post.title} />
                    ) : (
                      <img src="/img/SHIKAO-150x150.png" alt="news thumbnail" />
                    )
                  }
                  <div className="card__body">
                    <p className="card__meta">{post.date.split("T")[0]}</p>
                    <h3 className="card__title">{post.title}</h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            <Link href="/news">ニュース一覧を見る →</Link>
          </p>
        </div>
      </section >
      <section className="section">
        <div className="container">
          <h2>Contact</h2>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeEOqKvaCPFEPQSpZPiAxtIuj4-oAlSZHf0zpkTwsViMusnOA/viewform?embedded=true" width="70%" height="300px"  style={{ border: 0 }}>読み込んでいます…</iframe>
        </div>
      </section>
    </>
  );
}
