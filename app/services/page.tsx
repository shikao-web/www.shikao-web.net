import { serviceCards } from '@/components/layout/site-data';
import { client } from '@/libs/microcms';

export default async function ServicesPage() {

  const services_data = await client.get({
    endpoint: "services",
  });

  const services_grouped = services_data.contents.reduce((acc: any, post: any) => {
    const category = post.category || "uncategorized";

    if (!acc[category]) acc[category] = [];
    acc[category].push(post);

    return acc;
  }, {});

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>活動内容紹介</h1>
          <p>制作・実験・発信の3つの軸で取り組んでいる活動を紹介します。</p>
        </div>
      </section>

      {Object.entries(services_grouped).map(([category, posts]: any) => (
        <section key={category}>
          <div className="container">
            <h2>{category}</h2>
            <div className="grid">
              {posts.map((post: any) => (
                <a href={post.link_url} className="card">
                  <article key={post.title} >
                    <img src={post.thumbnail.url} alt={post.title} className="w-1/2 h-auto" />
                    <div className="card__body">
                      <h3 className="card__title">{post.title}</h3>
                      <p className="card__text">{post.description}</p>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
