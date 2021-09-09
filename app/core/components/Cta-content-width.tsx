import React from "react"
import { Link } from "blitz"
import { ArrowRight16 } from "@carbon/icons-react"

const CtaContentWidth = ({ call, description, link, button }) => {
  return (
    <div
      className="border-2 border-indigo-600 text-black dark:text-white pb-4 sm:m-0 m-4"
      style={{
        borderImage: "linear-gradient(135deg, #f472b6, #574cfa) 10",
      }}
    >
      <h2 className="text-3xl font-normal m-4">{call}</h2>
      <p className="m-4 text-base">{description}</p>
      <Link href={link}>
        <a
          className="m-4 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white pt-1 pr-4 pb-1 pl-4"
          target="_blank"
        >
          {button}
          <ArrowRight16 className="inline ml-2 mb-1 align-middle" />
        </a>
      </Link>
    </div>
  )
}

export default CtaContentWidth
