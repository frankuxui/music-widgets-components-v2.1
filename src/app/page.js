import HomeWidgets from '@/components/home-widgets'
import Link from 'next/link'

export default function Home () {
  return (
    <div className='w-full h-screen overflow-hidden'>
      <section className="overflow-hidden w-full mx-auto max-w-full">
        <div className="w-full flex items-start justify-between mx-auto gap-4">
          <div className="flex flex-col items-end w-full px-6 pb-20 dark:text-white">
            <div className="flex flex-col items-start flex-none w-full md:w-[45rem] pt-28">
              <h1 className="font-extrabold !leading-tight text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl 3xl:text-7xl">
                <span className="text-rose-500">Music</span> <span className="mx-1">widgets</span>
                <br />
                <span className="text-indigo-700">components</span> <span className="mx-1">with</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-500 via-cyan-500 to-green-500 block text-transparent bg-clip-text">Tailwind CSS</span>
              </h1>
              <p className="mt-4 sm:mt-8 text-xl md:text-2xl">This collection of music widget components built with Tailwind CSS allows you to easily integrate custom music controls into your web applications. Designed with a minimalist approach, these widgets are highly customizable and adaptable to any project. Enhance the user experience with a modern and functional design that fits seamlessly on any device.</p>
              <div className="flex items-center justify-start gap-1 sm:gap-3">
                <Link
                  href="/widgets"
                  className="hoverable mt-8 px-3 md:px-8 h-12 flex group gap-3 items-center justify-center transition-colors duration-500 rounded-md font-medium text-sm md:text-xl xl:text-xl 2xl:text-xl bg-indigo-700 text-white hover:bg-indigo-600">
                  <span>Explore widgets</span>
                  <span className="transition-all duration-500 -translate-x-0 group-hover:translate-x-2">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clip-rule="evenodd" fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  href="https://github.com/frankuxui/widgets-components-v2.1"
                  className="mt-8 px-3 md:px-8 h-12 flex gap-3 items-center justify-center transition-all duration-500 rounded-md font-medium text-sm md:text-xl xl:text-xl 2xl:text-xl border text-black bg-white shadow-sm hover:shadow-md dark:border-gray-800 dark:text-white dark:bg-gray-950 dark:hover:border-gray-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <g>
                      <path d="M0 0h24v24H0z" fill="none"/>
                      <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"/>
                    </g>
                  </svg>
                  <span>View on GitHub</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hoverable relative hidden md:flex justify-center items-center w-full">
            <div className="absolute pointer-events-none top-0 left-0 blur-3xl rounded-full w-[20rem] h-[20rem] bg-gradient-to-b opacity-20 from-[#89416d] to-[#da8703] dark:opacity-5" />
            <div className="absolute pointer-events-none bottom-0 left-0 blur-3xl rounded-full w-[20rem] h-[20rem] bg-gradient-to-b opacity-20 from-[#ecff8f] to-[#1eff00] dark:opacity-5" />
            <div className="w-full">
              <HomeWidgets />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
