import { ReactNode } from "react"
import { Head } from "blitz"
import Navbar from "../components/navbar"
import Footer from "../components/Footer"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "libscie.org2"}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
