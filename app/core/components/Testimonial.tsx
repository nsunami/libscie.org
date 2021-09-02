import React from "react"

export default function Testimonial({ quote, author, role, org, img }) {
  return (
    <section className="overflow-hidden mt-24 mb-24 text-black dark:text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote>
            <div className="max-w-screen-md mx-auto text-center text-2xl leading-9 font-normal ">
              <p>&ldquo;{quote}&rdquo;</p>
            </div>
            <div className="mt-6">
              <div className="md:flex md:items-center md:justify-center">
                {img ? (
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full object-cover"
                      src={img}
                      alt={author}
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className="mt-3 text-center md:mt-0 md:ml-4 sm:ml-2 md:flex md:items-center">
                  <div className="text-base font-medium tracking-wide">{author}</div>
                  <svg
                    className="hidden md:block mx-1 h-5 w-5 fill-current text-indigo-600"
                    viewBox="0 0 20 20"
                  >
                    <defs>
                      <linearGradient
                        id="grad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                        gradientTransform="rotate(90)"
                      >
                        <stop
                          offset="0%"
                          style={{
                            stopColor: "#574cfa",
                            stopOpacity: 1,
                          }}
                        />
                        <stop
                          offset="100%"
                          style={{
                            stopColor: "#f687b3",
                            stopOpacity: 1,
                          }}
                        />
                      </linearGradient>
                    </defs>
                    <path fill="url(#grad1)" d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base font-medium text-libscie-mono-300 tracking-wide">
                    {role}, {org}
                  </div>
                </div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
