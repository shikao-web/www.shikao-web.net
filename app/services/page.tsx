import { serviceCards } from '@/components/layout/site-data';

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>活動内容紹介</h1>
          <p>制作・実験・発信の3つの軸で取り組んでいる活動を紹介します。</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid">
          {serviceCards.map((service) => (
            <article key={service.title} className="card">
              <img src={service.image} alt={service.title} />
              <div className="card__body">
                <h2 className="card__title">{service.title}</h2>
                <p className="card__text">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
