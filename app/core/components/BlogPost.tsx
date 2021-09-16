import React from "react"

import PageHeader from "./Page-header"

const BlogPost = ({ post }) => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white w-screen mt-0">
      <div className="max-w-4xl mx-auto mt-0">
        <PageHeader
          page={"Blog - " + post.published_at.substring(0, 10)}
          title={post.title}
          description={post.custom_excerpt}
        />
        <div className="sm:flex w-screen sm:max-w-2xl">
          {post.authors.map((author) => (
            <div key="author" className="flex mr-4 ml-4 md:ml-0 my-2">
              <img className="h-8 w-8 rounded-full" src={author.profile_image} />
              <a
                href={author.website}
                className="mx-2 self-center"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="mx-2 self-center">{author.name}</h2>
              </a>
            </div>
          ))}
        </div>
        <article
          className="content mb-20 max-w-2xl md:mx-0 mx-4 text-justify blog-post"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></article>
      </div>
    </div>
  )
}

export default BlogPost
