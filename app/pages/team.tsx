import React from "react"
import { BlitzPage } from "blitz"
import { Home32, LogoGithub32, LogoLinkedin32, LogoTwitter32 } from "@carbon/icons-react"

import Layout from "../core/layouts/Layout"
import PageHeader from "../core/components/Page-header"

const core = [
  {
    name: "Patrick Sobrak-Seaton",
    role: "Product design and direction",
    imageUrl:
      "https://ucarecdn.com/80f98efd-04ce-4be6-ab70-a78b99a502a2/-/preview/-/quality/smart/",
    // bio:
    // 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    // twitterUrl: '#',
    linkedinUrl: "https://www.linkedin.com/in/sobrakseaton/",
    homepage: "https://sobrak-seaton.com/",
  },
  {
    name: "Chris Hartgerink",
    role: "Director & Founder",
    bio: "",
    imageUrl:
      "https://ucarecdn.com/9fc0687e-97e8-462a-acda-04b9f43737dc/-/preview/-/quality/smart/",
    twitterUrl: "https://twitter.com/chartgerink",
    githubUrl: "https://github.com/chartgerink",
    linkedinUrl: "https://www.linkedin.com/in/chris-hartgerink-b1b908196/",
    homepage: "https://chjh.nl",
  },
]

const TeamPage: BlitzPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white w-screen mt-0">
      <PageHeader
        page="Who we are"
        title="The team"
        description="Displayed in alphabetical order"
      />
      <div className="max-w-4xl mx-auto">
        <div className="py-12 px-8 lg:px-0">
          <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
            <div className="lg:col-span-2">
              <ul className="space-y-12 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                {core
                  .sort((a, b) => {
                    var x = a["name"]
                    var y = b["name"]
                    return x < y ? -1 : x > y ? 1 : 0
                  })
                  .map((person) => (
                    <li key={person.name} className="sm:py-8">
                      <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                        <div className="aspect-w-3 aspect-h-3 sm:aspect-w-3 sm:aspect-h-3">
                          <img
                            className="object-cover shadow-lg rounded"
                            src={person.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <div className="space-y-4">
                            <div className="text-lg leading-6 font-medium space-y-1">
                              <h3 className="text-2xl text-black dark:text-white font-normal">
                                {person.name}
                              </h3>
                              <p className="text-base text-indigo-600 font-normal">{person.role}</p>
                            </div>
                            {person.bio ? (
                              <div className="text-base">
                                <p className="text-black dark:text-white">{person.bio}</p>
                              </div>
                            ) : (
                              ""
                            )}
                            <ul className="flex space-x-5">
                              {person.homepage ? (
                                <li>
                                  <a
                                    href={person.homepage}
                                    className="text-black dark:text-white hover:text-indigo-600"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <span className="sr-only">Personal homepage</span>
                                    <Home32 />
                                  </a>
                                </li>
                              ) : (
                                ""
                              )}
                              {person.twitterUrl ? (
                                <li>
                                  <a
                                    href={person.twitterUrl}
                                    className="text-black dark:text-white hover:text-indigo-600"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <span className="sr-only">Twitter</span>
                                    <LogoTwitter32 />
                                  </a>
                                </li>
                              ) : (
                                ""
                              )}
                              {person.linkedinUrl ? (
                                <li>
                                  <a
                                    href={person.linkedinUrl}
                                    className="text-black dark:text-white hover:text-indigo-600"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <span className="sr-only">LinkedIn</span>
                                    <LogoLinkedin32 />
                                  </a>
                                </li>
                              ) : (
                                ""
                              )}
                              {person.githubUrl ? (
                                <li>
                                  <a
                                    href={person.githubUrl}
                                    className="text-black dark:text-white hover:text-indigo-600"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <span className="sr-only">GitHub</span>
                                    <LogoGithub32 />
                                  </a>
                                </li>
                              ) : (
                                ""
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

TeamPage.getLayout = (page) => <Layout title="Team">{page}</Layout>

export default TeamPage
