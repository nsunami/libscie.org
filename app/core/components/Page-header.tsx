import React from "react"

const PageHeader = ({ page, title, description }) => {
  return (
    <div className="max-w-4xl mx-auto pt-10 text-black dark:text-white pl-4 pr-4 sm:p-0 sm:pt-10">
      <p className="font-bold">{page.toUpperCase()}</p>
      <hr className="w-32 mt-4 mb-4 border-t-0 bg-gradient-to-r from-pink-400 to-indigo-600 bg-yellow-400 h-0.5 " />
      <article>
        <h1 className="font-black text-6xl sm:text-8xl">{title}</h1>
        <div role="doc-subtitle" className="text-2xl mt-2">
          {description}
        </div>
      </article>
    </div>
  )
}

export default PageHeader
