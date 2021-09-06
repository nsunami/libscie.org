import React from "react"
import { useQuery } from "@blitzjs/core"
import getLatestBlogPosts from "../queries/getLatestBlogPosts"

const BlogReel = () => {
  const [postsNew] = useQuery(getLatestBlogPosts, null)

  return (
    <div className="relative bg-white dark:bg-gray-900 px-4 sm:px-0 text-black dark:text-white pb-20">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our latest
          </h2>
        </div>
        <div className="mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {postsNew.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-3xl overflow-hidden">
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between hover:bg-indigo-100 dark:hover:bg-indigo-900">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.primary_tag.url} className="hover:underline">
                      {post.primary_tag.name}
                    </a>
                  </p>
                  <a href={post.url} className="block mt-2">
                    <p className="text-xl font-semibold hover:underline">{post.title}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.primary_author.url}>
                      <span className="sr-only">{post.primary_author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.primary_author.profile_image}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                      <a href={post.primary_author.url} className="hover:underline">
                        {post.primary_author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.published_at}>{post.published_at.substring(0, 10)}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogReel
