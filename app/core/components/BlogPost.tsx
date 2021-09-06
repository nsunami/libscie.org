import React from "react"
import { useQuery } from "blitz"

import getBlogPost from "../queries/getBlogPost"
import PageHeader from "./Page-header"

const BlogPost = (slug) => {
  const [post] = useQuery(getBlogPost, { slug })
  console.log(post)

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white w-screen mt-0">
      <div className=" max-w-4xl mx-auto mt-0">
        <PageHeader
          page={"Blog - " + post.published_at.substring(0, 10)}
          title={post.title}
          description={post.custom_excerpt}
        />
        <article
          className="content mb-20 sm:mx-0 mx-4 text-justify blog-post"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></article>
      </div>
    </div>
  )
}

export default BlogPost
