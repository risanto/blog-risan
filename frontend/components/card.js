import React from 'react'
import Link from 'next/link'
import Image from './image'

const card = (props) => {
    const { article } = props
    console.log(article)

    return (
        <Link as={`/article/${article.slug}`} href="/article/[id]">
            <a className="">
                <div className="">
                    <div className="">
                        <Image image={article.image} />
                    </div>
                    <div className="">
                        <div className="flex mt-2 overflow-x-scroll">
                            <div className="inline-block py-1 mr-1 text-sm rounded place-self-center">{article.language.name} •
                            </div>
                            {article.categories.map((category, idx) => {
                                if (idx < category.length - 1) {
                                    return <div key={category.id} className="inline-block py-1 text-sm rounded place-self-center">{category.name} •</div>
                                } else {
                                    return <div key={category.id} className="inline-block py-1 text-sm rounded place-self-center">{category.name} </div>
                                }
                            })}
                        </div>
                        <p className="text-xl font-heading">
                            {article.title}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default card
