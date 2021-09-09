import React from "react"
import { Link } from "blitz"

export default function Hero() {
  return (
    <div className="max-w-7xl z-40 mx-auto px-4 sm:px-6">
      <h1 className="pt-20 pb-5 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-indigo-600 h-auto">
        Your partner in repairing knowledge distribution
      </h1>
      <p className="max-w-xl text-black dark:text-white mb-5 font-bold">
        Help is on the way - liberate science supports your efforts to improve research, bringing a
        decade of open science activism, research experience, and technological know-how to your
        projects. All while we work towards our own grand vision.
      </p>
      <Link href="https://savvycal.com/libscie-chartgerink/chat">
        <a
          className="rounded bg-indigo-600 text-white text-xl p-2 hover:bg-indigo-500 shadow-3xl"
          target="_blank"
        >
          Book a free consult
        </a>
      </Link>
    </div>
  )
}
