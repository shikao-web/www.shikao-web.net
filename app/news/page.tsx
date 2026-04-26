import { client } from '@/libs/microcms'
import { newsItems } from '@/components/layout/site-data';


export default async function NewsPage() {
  const data = await client.get({
    endpoint: "news",
    queries: {
      orders: "-date"
    },

    
  });

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
          {data.contents.map((post: any) => (
            <a href={"/news/" + post.id} className="news-item">
              <article key={post.title}>
                <p className="card__meta">{post.date.split("T")[0]}</p>
                <h3>{post.title}</h3>
              </article>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
