import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
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
            description="Based on years of peer-reviewed research, our vision for improved science is where we publish research outputs step by step, instead of after-the-fact. This way, we track where findings come from and can "
          />
          <Testimonial
            quote="The vision for research modules left faculty and students in awe! The enthusiasm shows to this day - this is the way forward and everybody should hear about it."
            author="Dr. Martin Götz"
            role="Assistant Professor"
            org="University of Zurich"
            img="https://ucarecdn.com/b6620380-4af7-4dab-b237-c9db181cc0ca/-/preview/-/quality/smart/"
          />
          <Project
            title="Tailormade services and consultancy"
            description="We want to help you make your science more open. Our experienced team can help you with tasks ranging from grant-writing, website building, to forensic statistics."
          />
          <Project
            title="Keynotes"
            description="Open Science begins with shared knowledge. We welcome invitations to speak on the various facets of building open science, from introductions for beginners to advanced topics. Click below to find out where we are next month or to book us for an event."
          />
          <Project
            title="Podcast"
            description="Your Open Science Digest. Visit us below for teh latest news from the web, social media, and newsfeeds."
          />
          <CtaContentWidth
            call="TELL US YOUR CHALLENGE. WE LOVE COFFEE, SO DROP US A LINE!"
            description="Not sure yet? Sign up to our newsletter"
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
