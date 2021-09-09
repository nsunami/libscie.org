import React from "react"
import { ChevronDown24 } from "@carbon/icons-react"
import { Link } from "blitz"

export default function Project({ title, description, icon, button1, url1 }) {
  return (
    <div className="sm:flex mt-8 mb-8 dark:text-white">
      <div className="sm:w-52">
        {icon}
        {/* <icon className="w-52 h-52 mx-auto" /> */}
      </div>
      <div className="w-full pl-8">
        <h2 className="text-2xl mb-6">{title}</h2>
        <p className="text-base mb-6">{description}</p>
        {button1 ? (
          <Link href={url1}>
            <a
              className="text-base border-2 border-indigo-600 pt-1 pb-1 pl-4 pr-4 mr-4 hover:bg-indigo-600 hover:text-white"
              target="_blank"
            >
              {button1}
            </a>
          </Link>
        ) : (
          ""
        )}
        {/* <Link href="#">
          <a className="text-base border-2 border-indigo-600 pt-1 pb-1 pl-4 pr-4 hover:bg-indigo-600 hover:text-white">
            Learn more
          </a>
        </Link> */}
      </div>
    </div>
  )
}
