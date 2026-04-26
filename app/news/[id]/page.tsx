import { client } from "@/libs/microcms";

export default async function Page({
    params,
}: {
    params
}) {
    const { id } = await params;

    const post = await client.get({
        endpoint: "news",
        contentId: id,
    });

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h2>{post.title}</h2>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </section>
        </>
    );
}