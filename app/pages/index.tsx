import { Suspense, useState, useEffect } from "react"
import { InferGetStaticPropsType } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { Networking_06, Growth, Agriculture, Microphone } from "@carbon/pictograms-react"
import { Microphone32 } from "@carbon/icons-react"
import AudioPlayer from "react-h5-audio-player"
import rssParser from "react-native-rss-parser"
import { Play32, Pause32 } from "@carbon/icons-react"
import GhostContentAPI from "@tryghost/content-api"

import Project from "../core/components/Project"
import Hero from "../core/components/hero"
import Testimonial from "../core/components/Testimonial"
import Hrule from "../core/components/Hrule"
import CtaContentWidth from "../core/components/Cta-content-width"
import BlogReel from "../core/components/Blog-reel"

// const UserInfo = () => {
//   const currentUser = useCurrentUser()
//   const [logoutMutation] = useMutation(logout)

//   if (currentUser) {
//     return (
//       <>
//         <button
//           className="button small"
//           onClick={async () => {
//             await logoutMutation()
//           }}
//         >
//           Logout
//         </button>
//         <div>
//           User id: <code>{currentUser.id}</code>
//           <br />
//           User role: <code>{currentUser.role}</code>
//         </div>
//       </>
//     )
//   } else {
//     return (
//       <>
//         <Link href={Routes.SignupPage()}>
//           <a className="button small">
//             <strong>Sign Up</strong>
//           </a>
//         </Link>
//         <Link href={Routes.LoginPage()}>
//           <a className="button small">
//             <strong>Login</strong>
//           </a>
//         </Link>
//       </>
//     )
//   }
// }

const api = new GhostContentAPI({
  url: process.env.BLOG_URL,
  key: process.env.BLOG_KEY,
  version: "v3",
})

export async function getStaticProps() {
  const latestBlogPosts = await api.posts.browse({ limit: 3, include: "tags,authors" })

  return {
    props: {
      posts: latestBlogPosts,
    }, // will be passed to the page component as props
  }
}

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [latestPodcastUrl, setLatestPodcastUrl] = useState()

  useEffect(() => {
    fetch("https://anchor.fm/s/479af370/podcast/rss")
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        setLatestPodcastUrl(rss.items[0].enclosures[0].url)
      })
  }, [])

  return (
    <div>
      <main className="bg-white dark:bg-gray-900 pb-20 pt-28">
        <div className="bg-hero-pattern-black dark:bg-hero-pattern-white bg-cover pb-9">
          <Hero />
        </div>
        {/* <div className="buttons" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Suspense fallback="Loading...">
            <UserInfo />
            </Suspense>
          </div> */}
        {/* <Waves /> */}
        <div className="max-w-4xl mx-auto mt-28">
          <Suspense fallback="Loading">
            <BlogReel posts={posts} />
          </Suspense>
          <Project
            title="Research modules"
            description="While we help you, we nurture our vision for an improved science where we publish research outputs step by step, instead of after-the-fact. This way, we conveniently track where findings come from and expand the record to include things beyond narratives."
            icon={<Networking_06 className="w-40 h-40 mx-auto" />}
            button1="Watch the introduction video"
            url1="https://www.youtube.com/watch?v=wdgPnsiifQU"
          />
          <Testimonial
            quote="The vision for research modules left faculty and students in awe! The enthusiasm shows to this day - this is the way forward and everybody should hear about it."
            author="Dr. Martin G??tz"
            role="Assistant Professor"
            org="University of Zurich"
            img="https://ucarecdn.com/b6620380-4af7-4dab-b237-c9db181cc0ca/-/preview/-/quality/smart/"
          />
          <Hrule />
          <Project
            title="Workshops"
            description="Open Science begins with sharing knowledge. We welcome invitations to share our experience on building open science, from introductions for beginners to advanced topics for experts."
            icon={<Agriculture className="w-32 h-32 mx-auto" />}
            button1="Book us"
            url1="mailto:info@libscie.org?subject=Booking request"
          />
          <Project
            title="Nurture your work"
            description="We help you make science more open. We're ready to help you with tasks ranging from software engineering, website building, forensic statistics, and much more. We are versatile and used to new environments."
            icon={<Growth className="w-32 h-32 mx-auto" />}
            button1="Share your problem"
            url1="mailto:info@libscie.org?subject=Booking request"
          />
          {/* <Hrule /> */}
          <Project
            title="Podcast"
            description="Stay up-to-date with our weekly open science digest, collecting the latest from the web, social media, and newsfeeds. Press play on the left to hear the latest episode."
            icon={
              <AudioPlayer
                autoPlay={false}
                hasDefaultKeyBindings={false}
                src={latestPodcastUrl}
                autoPlayAfterSrcChange={false}
                layout="stacked"
                customIcons={{
                  play: <Play32 />,
                  pause: <Pause32 />,
                }}
                customAdditionalControls={[]}
                customVolumeControls={[]}
                showSkipControls={false}
                showJumpControls={false}
                showDownloadProgress={false}
                showFilledVolume={false}
                className="flex w-32 h-32 mx-auto align-middle focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:rounded"
              />
            }
            button1="Subscribe"
            url1="https://anchor.fm/open-update"
          />
          <CtaContentWidth
            call="Share your current ideas and challenges in a chat with us"
            description="We're happy to meet and see whether we can help you, or at least point you in the right direction."
            link="https://savvycal.com/libscie-chartgerink/free-consult"
            button="Book a free consult"
          />
        </div>
      </main>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
