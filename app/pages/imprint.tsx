import React from "react"
import { BlitzPage } from "blitz"
import Layout from "../core/layouts/Layout"
import PageHeader from "../core/components/Page-header"

const Imprint: BlitzPage = () => {
  return (
    <div className="h-screen bg-white dark:bg-gray-900">
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
    </div>
  )
}

Imprint.suppressFirstRenderFlicker = true
Imprint.getLayout = (page) => <Layout title="Imprint">{page}</Layout>

export default Imprint
