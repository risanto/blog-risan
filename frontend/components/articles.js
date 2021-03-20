import React from 'react'
import Card from '../components/card'

const articles = (props) => {
    const { articles } = props
    const leftArticlesCount = Math.ceil(articles.length / 5)
    const leftArticles = articles.slice(0, leftArticlesCount)
    const rightArticles = articles.slice(leftArticlesCount, articles.length)

    return (
        <section className="mx-3 my-4">
            <div>
                {leftArticles.map((article, i) => {
                    return (
                        <Card article={article} key={`article__left__${article.slug}`} />
                    );
                })}
            </div>
        </section>
    )
}

export default articles
