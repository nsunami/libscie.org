/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { ChartBarIcon, PhoneIcon, PlayIcon, SupportIcon } from "@heroicons/react/outline"
import { Link, Routes } from "blitz"
import { ChevronDown24, Menu32, Close24 } from "@carbon/icons-react"
import LibscieLogo from "./Libscie-logo"

const singleLinks = [
  {
    name: "Community",
    href: "#",
  },
  {
    name: "Infrastructure",
    href: "#",
  },
  {
    name: "Who we are",
    href: "#",
  },
]
const features = [
  {
    name: "Hypergraph",
    href: "#",
    description: "Publish research modules",
    icon: ChartBarIcon,
  },
  {
    name: "Open Update",
    href: "#",
    description: "Weekly open science news podcast",
    icon: ChartBarIcon,
  },
  {
    name: "Consulting",
    href: "#",
    description: "We support your work with our expertise",
    icon: ChartBarIcon,
  },
]
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
]
const resources = [
  {
    name: "FAQs",
    description: "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
]
const recentPosts = [{ id: 1, name: "Boost your conversion rate", href: "#" }]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  return (
    <div className="w-full sticky bg-gray-50 dark:bg-gray-900 top-0 text-base z-50">
      <Popover className="relative bg-gray-50 dark:bg-gray-900 shadow-3xl w-full">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1 w-10 h-auto inline-block">
              <Link href={Routes.Home()}>
                <a>
                  <span className="sr-only">Liberate Science</span>
                  <LibscieLogo />
                </a>
              </Link>
            </div>
            {/* START MOBILE */}
            {/* Hamburger menu */}
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-gray-50 dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Menu32 className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-3xl ring-1 ring-black ring-opacity-5 bg-gray-50 dark:bg-gray-900">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <LibscieLogo />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <Close24 className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {features.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-indigo-600"
                              aria-hidden="true"
                            />
                            <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">
                              {item.name}
                            </span>
                          </a>
                        ))}
                        {singleLinks.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-gray-900 dark:text-white"
                          >
                            {link.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="bg-indigo-600 py-5 px-5 rounded-b">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      {resources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium text-white"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>

            {/* START DESKTOP */}
            {/* Popover 1 */}
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? "text-gray-700 dark:text-gray-300"
                          : "text-gray-500 dark:text-gray-500",
                        "group bg-gray-50 dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2  focus:ring-indigo-500"
                      )}
                    >
                      <span>Projects</span>
                      <ChevronDown24
                        className={classNames(
                          open
                            ? "text-gray-700 dark:text-gray-300"
                            : "text-gray-600 dark:text-gray-500",
                          "ml-2 h-5 w-5 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    {/* Popover panel 1 */}
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute shadow-3xl rounded-b -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-gray-50 dark:bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8">
                            {features.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900 dark:text-gray-300">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 py-5  bg-indigo-600 text-white space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium"
                                >
                                  <item.icon className="flex-shrink-0 h-6 w-6" aria-hidden="true" />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {singleLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
                >
                  {link.name}
                </a>
              ))}
              {/* Popover 2 */}
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? "text-gray-700 dark:text-gray-300"
                          : "text-gray-500 dark:text-gray-500",
                        "group bg-gray-50 dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2  focus:ring-indigo-500"
                      )}
                    >
                      <span>More</span>
                      <ChevronDown24
                        className={classNames(
                          open
                            ? "text-gray-700 dark:text-gray-300"
                            : "text-gray-500 dark:text-gray-500",
                          "ml-2 h-5 w-5 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute shadow-3xl left-1/2 z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-gray-50 dark:bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900 dark:text-gray-300">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {/* <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a> */}
            </div>
          </div>
        </div>
      </Popover>
    </div>
  )
}
