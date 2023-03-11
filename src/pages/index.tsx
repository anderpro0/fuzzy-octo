/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <div className="sm:px-8 mt-9">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                    Frontend Web Developer, crypto enthusiast, learning Rust..
                  </h1>
                  <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
                    I'm Anderson, a self-taught front-end web developer based in Abuja.
                    I'm a student and I love creating stuff I think of. Programming skills comes the closest to magic for me. When I'm not working around the JavaScript eco-system, I Learn Rust, but I still don't know why tho'.
                  </p>
                </div>

                <div className="my-4 flex justify-right gap-5 overflow-hidden">


                  <Image src="./images/node.svg" height={30} width={30} alt="" />
                  <Image src="./images/javascript.svg" height={30} width={30} alt="" />
                  <Image src="./images/react.svg" height={30} width={30} alt="" />
                  <Image src="./images/typescript.svg" height={30} width={30} alt="" />
                  <Image src="./images/next-js.svg" height={30} width={30} alt="" />
                  <Image src="./images/tailwindcss.svg" height={30} width={30} alt="" />

                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
