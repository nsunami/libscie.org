import { ReactNode } from "react"
import { Head, Link } from "blitz"
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent"

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
      <CookieConsent
        location="bottom"
        style={{
          background: "var(--primary-color)",
          fontSize: "1rem",
          left: "50",
          maxWidth: "100%",
        }}
        buttonText="Got it"
        cookieName="libscieorg-website-cookie"
        buttonStyle={{
          backgroundColor: "#2c2683",
          color: "var(--text-inverse)",
          fontSize: "1rem",
        }}
        expires={150}
        onAccept={() => {}}
      >
        We use essential cookies to provide a secure webpage. See also our{" "}
        <Link href="https://www.notion.so/libscie/Terms-libscie-org-6f22bba7d3314ee2915ae4419e55317c#6021cfc8513f44b89aac6d57eea95d11">
          <a className="hover:no-underline hover:text-white underline" target="_blank">
            Data policy
          </a>
        </Link>
        .
      </CookieConsent>
    </>
  )
}

export default Layout
