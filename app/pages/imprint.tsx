import React from "react"
import { BlitzPage } from "blitz"
import Layout from "../core/layouts/Layout"
import PageHeader from "../core/components/Page-header"

const Imprint: BlitzPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <PageHeader
        page="Imprint"
        title="Who runs this website?"
        description={
          <>
            <p>Liberate Science GmbH</p>
            <p>Ebertystraße 44</p>
            <p>10249 Berlin (Germany)</p>
          </>
        }
      />
      <div className="text-black dark:text-white max-w-4xl mx-4 sm:mx-auto pt-4 pb-8">
        <h2 className="font-bold text-xl mt-4">Director</h2>
        <p>Chris Hartgerink</p>
        <p>
          <a
            className="border-b-2 border-indigo-600 hover:bg-indigo-600 hover:text-white"
            href="tel:+491626818225"
          >
            +49 162 68 18 225
          </a>
        </p>
        <p>
          <a
            className="border-b-2 border-indigo-600 hover:bg-indigo-600 hover:text-white"
            href="mailto:info@libscie.org"
          >
            info@libscie.org
          </a>
        </p>
        <h2 className="font-bold text-xl mt-4">Registration</h2>
        <p>Amtsgericht Charlottenburg (Berlin)</p>
        <p>HRB 211 450</p>
        <p>VAT ID DE326772207</p>
        <p>EORI DE804962659955787</p>
      </div>
    </div>
  )
}

Imprint.suppressFirstRenderFlicker = true
Imprint.getLayout = (page) => <Layout title="Imprint">{page}</Layout>

export default Imprint
