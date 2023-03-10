/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'


export async function getStaticProps() {
    return {
        props: {
            pageId: "about"
        }
    }
}

const about = () => {
    return (
        (<main>
            <div className="sm:px-8 mt-16 sm:mt-32">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
                                <div className="lg:pl-20">
                                    <div className="max-w-xs px-2 5 lg:max-w-none">
                                        <img alt="main" sizes="(min-width: 1024px) 32rem, 20rem" src="/images/header.png" className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" loading="lazy" />
                                    </div>
                                </div>

                                <div className="lg:order-first lg:row-span-2">
                                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                                        I'm Anderson Victor. &nbsp;I live in Abuja. I'm a Frontend Web Dev.
                                    </h1>
                                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                                        <p>I've loved making things for as long as I can remember, I just didn't think of writing code or programming in general until the close of 2021 when I started finding JavaScript Interesting. The journey has been challenging, learning stuff by yourself can be quite a hard thing to do but it's worth every time I've put in learning.</p>
                                        <p>I'm Currently looking for an internship or open-source opportunities to kickstart my journey professionally, I've managed to build and finish up some projects while learning and to be honest, that comes with some sense of accomplishment. Really looking forward to rs and learning industry best practices and also making new friends.  </p>
                                        <p> I'm an active learner, I'm constantly learning and improving my fundamental skill  while also learning new trends. When I'm not on a computer writing out code I enjoy playing football and listening and talking about crypto and blockchain technologies.</p>
                                    </div>
                                </div>


                                <div className="lg:pl-20">
                                    <ul role="list">
                                        <li className="mt-4 flex">
                                            <a href="https://twitter.com/iamNdubisi" className='flex items-center transition hover:text-blue-400'> <FaTwitter /> <span className='ml-4'>Follow on twitter</span> </a>
                                        </li>
                                        <li className="mt-4 flex">
                                            <a href="https://www.instagram.com/ndubes97/" className='flex items-center transition hover:text-blue-400'><FaInstagram /> <span className='ml-4'>Follow on Instagram</span></a>
                                        </li>
                                        <li className="mt-4 flex">
                                            <a href="https://github.com/anderpro0" className="flex items-center transition hover:text-blue-400"><FaGithub /> <span className="ml-4">Follow on Github</span></a>
                                        </li>
                                        <li className="mt-4 flex">
                                            <a href="https://www.linkedin.com/in/anderson-victor-5b1308224/" className="flex items-center transition hover:text-blue-400">
                                                <FaLinkedin /> <span className="ml-4">Follow on Linkedin</span>
                                            </a>
                                        </li>
                                        <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex"><a className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="mailto:anderpro.va@gmail.com"><svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"><path fill-rule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path></svg><span className="ml-4">anderpro.va@gmail.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
        )
    )
}


export default about

    // < div className = "sm:px-8 mt-16 sm:mt-32 h-full" >
    //     <div className="mx-auto max-w-7xl lg:px-8">
    //         <div className="relative px-4 sm:px-8 lg:px-12">
    //             <div className="mx-auto max-w-2xl lg:max-w-5xl">
    //                 <div className="p-6 flex flex-col-reverse md:grid md:grid-cols-2 md:gap-11">
    //                     <div>
    //                         <div className="lg:order-first lg:row-span-2">
    //
    //
    //                             <div className="mt-16 flex flex-col md:hidden">
    //                                 <a href=""><FaTwitter /></a>
    //                             </div>
    //                         </div>

    //                     </div>
    //                 </div>

    //             </div>
    //         </div>
    //     </div>
    //         </div >


