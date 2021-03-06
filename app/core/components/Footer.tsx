import React from "react"
import { Link, Routes } from "blitz"
import { Email32, LogoTwitter32, LogoGithub32, LogoLinkedin32 } from "@carbon/icons-react"
import newGithubIssueUrl from "new-github-issue-url"

import Mozilla from "./Mozilla"
import Shuttleworth from "./Shuttleworth"
import PublicDomain from "./PublicDomain"

export default function Footer() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 sm:p-0 p-4">
      <div className="sm:flex sm:max-w-4xl mx-auto text-black dark:text-white bg-white dark:bg-gray-900">
        <div className="w-10/12 sm:w-full mb-0 sm:mb-28 mt-0 text-sm">
          <h3 className="font-bold text-base">liberate science</h3>
          <p className="flex align-middle">
            2021
            <PublicDomain />
            CCO
          </p>
          <hr className="w-20 mt-4 mb-4 border-t-0 bg-gradient-to-r from-pink-400 to-indigo-600 bg-yellow-400 h-0.5 " />
          <p>
            <Link href="https://www.notion.so/libscie/Terms-libscie-org-6f22bba7d3314ee2915ae4419e55317c">
              <a className="hover:bg-indigo-600 hover:text-white" target="_blank">
                Terms
              </a>
            </Link>
          </p>
          <p>
            <Link href="https://www.notion.so/libscie/Terms-libscie-org-6f22bba7d3314ee2915ae4419e55317c#6021cfc8513f44b89aac6d57eea95d11">
              <a className="hover:bg-indigo-600 hover:text-white" target="_blank">
                Data policy
              </a>
            </Link>
          </p>
          <p>
            <Link
              href={newGithubIssueUrl({
                user: "libscie",
                repo: "libscie.org",
                title: "Found issue with website",
                body: "While browsing your website, I found the following issue:\n\n",
              })}
            >
              <a className="hover:bg-indigo-600 hover:text-white" target="_blank">
                Report issue
              </a>
            </Link>
          </p>
          <p>
            <Link href={Routes.Imprint()}>
              <a className="hover:bg-indigo-600 hover:text-white">Imprint</a>
            </Link>
          </p>
        </div>
        <div className="w-10/12 sm:w-full mt-4 sm:mt-0">
          <h3 className="mb-4 font-bold text-sm">Funders</h3>
          <p className="mt-4 mb-4">
            <Link href="https://shuttleworthfoundation.org">
              <a target="_blank">
                <Shuttleworth />
              </a>
            </Link>
          </p>
          <p className="mt-4">
            <Link href="https://foundation.mozilla.org/en/">
              <a target="_blank">
                <Mozilla />
              </a>
            </Link>
          </p>
        </div>
        <div className="w-10/12 sm:w-full text-sm">
          {/* <h3 className="mb-4 font-bold">Navigation</h3> */}
        </div>
        <div className="w-10/12 sm:w-full text-sm  mt-4 sm:mt-0">
          <h3 className="mb-4 font-bold text-sm">Follow</h3>
          <p>
            <Link href="https://github.com/libscie">
              <a className="flex align-middle" target="_blank">
                <LogoGithub32 className="max-h-4 w-auto m-1" />
                <span className="hover:bg-indigo-600 text-black dark:text-white hover:text-white">
                  GitHub
                </span>
              </a>
            </Link>
          </p>
          <p>
            <Link href="https://www.linkedin.com/company/libscie">
              <a className="flex align-middle" target="_blank">
                <LogoLinkedin32 className="max-h-4 w-auto m-1" />
                <span className="hover:bg-indigo-600 text-black dark:text-white hover:text-white">
                  LinkedIn
                </span>
              </a>
            </Link>
          </p>
          <p>
            <Link href="https://forms.gle/ebzsSRN8erubCTW5A">
              <a className="flex align-middle" target="_blank">
                <Email32 className="max-h-4 w-auto m-1" />
                <span className="hover:bg-indigo-600 text-black dark:text-white hover:text-white">
                  Newsletter
                </span>
              </a>
            </Link>
          </p>
          <p>
            <Link href="https://twitter.com/libscie">
              <a className="flex align-middle" target="_blank">
                <LogoTwitter32 className="max-h-4 w-auto m-1" />
                <span className="hover:bg-indigo-600 text-black dark:text-white hover:text-white">
                  Twitter
                </span>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
