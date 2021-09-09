import React from "react"
import { Link } from "blitz"

const Callout = ({ icon, bg, title, description, actionsBottom, actionRight, flag }) => {
  return (
    <div
      className={`m-4 ${bg} p-4 lg:ml-0 lg:mr-0 ${
        flag ? `rounded-r-alert rounded-lt-none border-l-4 ${flag}` : "rounded-alert"
      }`}
    >
      <div className="flex flex-row">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-grow ml-3">
          {title ? (
            <h3 className="text-base font-medium text-black dark:text-white">{title}</h3>
          ) : (
            ""
          )}
          <div className={`${!title ? "" : "mt-2"} text-base text-black dark:text-white`}>
            <p>{description}</p>
          </div>
          {actionsBottom ? (
            <div className="mt-2">
              {actionsBottom.map((action) => (
                <Link href={action.link} key={action.text}>
                  <a className="mr-2 text-black dark:text-white border-b-2 border-black dark:text-white hover:bg-transparent hover:text-black dark:text-white">
                    {action.text}
                  </a>
                </Link>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        {actionRight ? (
          <div
            onClick={actionRight.action}
            className="flex items-center text-black dark:text-white border-b-0 border-black dark:text-white hover:bg-transparent hover:text-black dark:text-white cursor-pointer"
          >
            {actionRight.text}
            <span className="ml-2 block">{actionRight.icon}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default Callout
