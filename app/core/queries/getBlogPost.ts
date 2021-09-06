import GhostContentAPI from "@tryghost/content-api"

const api = new GhostContentAPI({
  url: process.env.BLOG_URL,
  key: process.env.BLOG_KEY,
  version: "v3",
})

export default async function getBlogPost(slug) {
  const blogPost = await api.posts.read(slug.slug)

  return blogPost
}
