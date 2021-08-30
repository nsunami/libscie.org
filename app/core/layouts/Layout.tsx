import { ReactNode } from "react"
import { Head } from "blitz"
import Navbar from "../components/navbar"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "libscie.org2"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
