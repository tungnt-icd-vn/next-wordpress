import Head from 'next/head'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroShop from '../../components/hero-post'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAllPostsForHome } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import Header from '../../components/header'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
        <Header />
          <Intro />
          {heroPost && (
            <HeroShop
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
