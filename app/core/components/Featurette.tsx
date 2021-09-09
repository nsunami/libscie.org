import React from "react"

const Featurette = ({ contents }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pl-4 pr-4 lg:pl-0 lg:pr-0">
      {contents.map((content) => (
        <div key={content.feature}>
          {content.icon}
          <h3 className="ml-2 mt-4 mb-2 text-base font-bold tracking-wide">{content.feature}</h3>
          <p className="ml-2 text-base font-normal">{content.argument}</p>
        </div>
      ))}
    </div>
  )
}

export default Featurette
