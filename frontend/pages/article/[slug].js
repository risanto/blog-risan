import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"

const Article = ({ article }) => {
    const imageUrl = getStrapiMedia(article.image)

    const seo = {
        metaTitle: article.title,
        metaDescription: article.description,
        shareImage: article.image,
        article: true,
    }

    return (
        <Layout>
            <Seo seo={seo} />
            <main className="p-6 dark:bg-black dark:text-white">
                <section>
                    <h1 className="text-2xl font-heading">{article.title}</h1>
                    <span
                        className="inline-block py-1 mr-1 text-sm rounded place-self-center"
                    >
                        <Moment format="MMM Do YYYY">{article.published_at}</Moment> / {article.language.name} /
                    </span>
                    {article.categories.map((category, idx) => {
                        if (idx < category.length - 1) {
                            return <span key={category.id} className="inline-block py-1 text-sm rounded place-self-center">{category.name} •</span>
                        } else {
                            return <span key={category.id} className="inline-block py-1 text-sm rounded place-self-center">{category.name} </span>
                        }
                    })}
                    <img
                        className="mt-2"
                        src={imageUrl}
                    />
                </section>
                <section className="markdown-body">
                    {article.content}
                </section>
            </main>
        </Layout>
    )
};

export async function getStaticPaths() {
    const articles = await fetchAPI("/articles");

    return {
        paths: articles.map((article) => ({
            params: {
                slug: article.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const articles = await fetchAPI(
        `/articles?slug=${params.slug}&status=published`
    );
    const categories = await fetchAPI("/categories");

    return {
        props: { article: articles[0], categories },
        revalidate: 1,
    };
}

export default Article;