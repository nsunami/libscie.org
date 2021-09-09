import { BlitzPage, useParam } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Suspense } from "react"
import BlogPost from "../../core/components/BlogPost"

const BlogPostPage: BlitzPage = () => {
  const slug = useParam("slug", "string")
  // check whether slug exists -> if not 404
  // get post

  return (
    <div className="flex justify-center items-center">
      <Suspense fallback="Loading...">
        <BlogPost slug={slug} />
      </Suspense>
    </div>
  )
}

BlogPostPage.getLayout = (page) => <Layout title="Blog post">{page}</Layout>

export default BlogPostPage