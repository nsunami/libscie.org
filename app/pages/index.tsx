import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { Networking_06, Growth, Agriculture, Microphone } from "@carbon/pictograms-react"
import { Microphone32 } from "@carbon/icons-react"

import Project from "../core/components/Project"
import Hero from "../core/components/hero"
import HeroBackground from "../core/components/HeroBackground"
import Testimonial from "../core/components/Testimonial"
import Hrule from "../core/components/Hrule"
import CtaContentWidth from "../core/components/Cta-content-width"
import Waves from "../core/components/Waves"
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

const Home: BlitzPage = () => {
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
            <BlogReel />
          </Suspense>
          <Project
            title="Research modules"
            description="While we help you, we nurture our vision for an improved science where we publish research outputs step by step, instead of after-the-fact. This way, we conveniently track where findings come from and expand the record to include things beyond narratives."
            icon={<Networking_06 className="w-40 h-40 mx-auto" />}
          />
          <Testimonial
            quote="The vision for research modules left faculty and students in awe! The enthusiasm shows to this day - this is the way forward and everybody should hear about it."
            author="Dr. Martin Götz"
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
            description="Your Open Science Digest. Stay up-to-date and visit us below for the latest news from the web, social media, and newsfeeds."
            icon={<Microphone className="w-32 h-32 mx-auto" />}
            button1="Subscribe"
            url1="https://anchor.fm/open-update"
          />
          <CtaContentWidth
            call="Invite us to a chat and share your current challenges?"
            description="We're happy to meet and see whether we can help point you in the right direction."
            link="https://savvycal.com/libscie-chartgerink/chat"
            button="Chat with us"
          />
        </div>
      </main>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
