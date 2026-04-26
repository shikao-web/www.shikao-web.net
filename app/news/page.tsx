import { newsItems } from '@/components/layout/site-data';

export default function NewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>News</h1>
          <p>SHIKAO-WEB の活動記録・更新情報を掲載しています。</p>
        </div>
      </section>

      <section className="section">
        <div className="container news-list">
          {newsItems.map((item) => (
            <article key={item.title} className="news-item">
              <p className="card__meta">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
