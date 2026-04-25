import Link from 'next/link';
import { newsItems } from '@/components/site-data';

export default function HomePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>こんにちは、SHIKAOです。</h1>
          <p>技術に触って「楽しい」「面白い」を感じる過程を、作品と記録として発信しています。</p>
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
    </>
  );
}
