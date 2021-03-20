import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from '../lib/api'

const Home = ({ articles, categories, homepage, languages }) => {
  return (
    <Layout categories={categories} languages={languages}>
      <Seo seo={homepage.seo} />

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