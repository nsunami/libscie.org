import { BlitzPage, useParam } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Suspense } from "react"
import GhostContentAPI from "@tryghost/content-api"

import BlogPost from "../../core/components/BlogPost"

const api = new GhostContentAPI({
  url: "https://blog.libscie.org",
  key: process.env.BLOG_KEY,
  version: "v3",
})

export async function getStaticPaths() {
  const rawPosts = await api.posts.browse({ limit: 100 })
  const postSlugs = rawPosts.map((post) => {
    return { params: { slug: post.slug } }
  })

  return {
    paths: postSlugs,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const blogPost = await api.posts.read({ slug: context.params.slug }, { include: "tags,authors" })

  return {
    props: {
      post: blogPost,
    }, // will be passed to the page component as props
  }
}

const BlogPostPage: BlitzPage = ({ post }) => {
  return (
    <Layout title={post.title}>
      <div className="flex justify-center items-center">
        <Suspense fallback="Loading...">
          <BlogPost post={post} />
        </Suspense>
      </div>
    </Layout>
  )
}

export default BlogPostPage
