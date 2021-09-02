import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"
import Project from "../core/components/Project"
import Hero from "../core/components/hero"
import HeroBackground from "../core/components/HeroBackground"
import Testimonial from "../core/components/Testimonial"
import Hrule from "../core/components/Hrule"

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
      <main className="bg-white dark:bg-gray-900 pb-20">
        <Hero />
        {/* <div className="buttons" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Suspense fallback="Loading...">
              <UserInfo />
            </Suspense>
          </div> */}
        <div className="max-w-4xl mx-auto">
          <Project
            title="Hypergraph"
            description="Hypergraph is our first tool, which is an easy to use version tracker like Zenodo except it writes your content to the peer-to-peer commons instead of the CERN institute or Elsevier Digital Commons. Therefore the fate of your data is not linked to the fate of the institute where you store it."
          />
          <Project
            title="Tailormade services and consultancy on Open Science Practice."
            description="We love to help you to make science more open. With our experienced team we often co-write grants, build websites for research groups."
          />
          <Project
            title="Keynotes"
            description="We often share our knowledge and experiences on open science. For instance for the OASPA conference, the Open Science Community Tilburg group and the Gieskes-Strijbis Fund. Do you want to know where we are next month, or book us for a keynote or talk?"
          />
          <Testimonial
            quote="The vision for research modules left faculty and students in awe! The enthusiasm shows to this day - this is the way forward and everybody should hear about it."
            author="Dr. Martin Götz"
            role="Assistant Professor"
            org="University of Zurich"
            img="https://www.psychologie.uzh.ch/psychologie/dam/jcr:ffffffff-cc56-3101-ffff-ffffe6847272/martin_goetz.jpg"
          />
          <Project title="Podcast" />
        </div>
      </main>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
