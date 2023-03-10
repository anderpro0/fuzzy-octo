import { useState } from 'react'
import Image from 'next/image'
import Navitems from './Navitems'
import Link from 'next/link'
import ThemeToggler from '../ThemeToggler'
import React from 'react'
import MobileNav from './MobileNav'


type NavigationProps = {
    pageId: string
}

type StyleProps = {
    style: string

}

const Homenav = (props: NavigationProps, currentPage: StyleProps) => {


    let { pageId } = props
    return (
        <>
            <div className='relative'>
                <header className='pointer-events-auto relative z-50 flex-col h-40' >
                    <div className='top-0 z-10 h-16 pt-6'>
                        <div className="sm:px-8">
                            <div className="mx-auto max-w-7xl lg:px-8">

                                <div className="relative px-4 sm:px-8 lg:px-12">
                                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                        <div className="relative flex gap-4">
                                            <div className="flex flex-1">
                                                <Link href={'/'}>
                                                    <Image src={'/images/idea.png'} height="50" width={50} alt="logo" className='rounded-full' />
                                                </Link>
                                            </div>
                                            <MobileNav pageId={''} />
                                            <nav className='hidden md:block'>
                                                <ul className='flex rounded-full px-3 bg-white/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5'>
                                                    <Navitems url={'/about'} title={'About'} isSelected={pageId === "about"} />
                                                    <Navitems url={'/portfolio'} title={'Portfolio'} isSelected={pageId === "portfolio"} />
                                                    <Navitems url={'/articles'} title={'Articles'} isSelected={pageId === "articles"} />
                                                </ul>
                                            </nav>

                                            <div className="flex md:flex-1 items-center justify-end">
                                                <ThemeToggler />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Homenav 