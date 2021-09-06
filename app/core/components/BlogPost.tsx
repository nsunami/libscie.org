import React from "react"
import { useQuery } from "blitz"

import getBlogPost from "../queries/getBlogPost"
import PageHeader from "./Page-header"

const BlogPost = (slug) => {
  const [post] = useQuery(getBlogPost, { slug })

  return (
    <div>
      <PageHeader page="Blog" title={post.title} description={post.custom_excerpt} />
      <div className="content" dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  )
}

export default BlogPost
