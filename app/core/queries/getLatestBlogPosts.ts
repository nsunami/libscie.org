import GhostContentAPI from "@tryghost/content-api"

const api = new GhostContentAPI({
  url: process.env.BLOG_URL,
  key: process.env.BLOG_KEY,
  version: "v3",
})

export default async function getLatestBlogPosts(x) {
  const latestBlogPosts = await api.posts.browse({ limit: 3, include: "tags,authors" })

  return latestBlogPosts
}
