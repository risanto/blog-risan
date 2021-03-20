import React from 'react'
import Articles from '../components/articles'
import Categories from '../components/categories'
import Dropdown from '../components/dropdown'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'

const Home = ({ articles, categories, homepage, languages }) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <header className="flex flex-col justify-center px-3 mt-4 bg-white align-center">
        <h1 className="text-2xl text-center font-heading">Hey, I'm Risan</h1>
        <p>I'm a full stack developer who writes about web development and productivity.</p>
      </header>
      <section className="flex flex-row mx-2 mt-4">
        <Dropdown items={languages} color='white' heading='Languages' />
        <Categories categories={categories} languages={languages} />
      </section>
      <section className="mt-4">
        <Articles articles={articles} />
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage, languages] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/languages")
  ])

  return {
    props: { articles, categories, homepage, languages },
    revalidate: 1
  }
}

export default Home