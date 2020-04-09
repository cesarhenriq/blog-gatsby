import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
  query PostList {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            category
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            description
            title
            background
          }
          timeToRead
        }
      }
    }
  }
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(({ node: { frontmatter: { background, category, date, description, title }, timeToRead } }, i) => (
        <PostItem key={i}
          slug="/slug"
          background={background}
          category={category}
          date={date}
          timeToRead={String(timeToRead)}
          title={title}
          description={description}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
