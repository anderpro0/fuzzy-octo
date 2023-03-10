import React from 'react'
import { Menu } from '@headlessui/react'
import Navitems from './Navitems'

type MobileNavProps = {
    pageId: string
}

const MobileNav = (props: MobileNavProps) => {

    const { pageId } = props
    return (

        <div>
            <Menu as="div" className='flex flex-1 py-2 px-4 justify-end md:justify-center'>
                <div className="pointer-events-auto md:hidden">
                    <Menu.Button className={`group flex items-center rounded-full bg-white/90 py-2 px-4 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur`} type="button" aria-expanded="false" data-headlessui-state id="headlessui-popover-button-:R2qb6">
                        Menu
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-3 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </Menu.Button>
                    <div>
                        <Menu.Items className={`mt-0`}>


                            <div className='fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100' id="headlessui-popover-overlay-:ro:" aria-hidden="true" data-headlessui-state></div>
                            <div className='fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 opacity-100 scale-100' id="headlessui-popover-panel-:rp:" tabIndex={-1} data-headlessui-state>
                                <div className="flex flex-row-reverse items-center justify-between">
                                    <Menu.Button className={`-m-1 p-1`} type="button" aria-hidden="true" data-headlessui-state="open"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    </Menu.Button>
                                    <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navigation</h2>
                                </div>
                                <nav className='mt-6'>
                                    <ul className='-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
                                        <Menu.Item><Navitems url={'/about'} title={'About'} isSelected={pageId === "about"} /></Menu.Item>
                                        <Menu.Item><Navitems url={'/portfolio'} title={'Portfolio'} isSelected={pageId === "portfolio"} /></Menu.Item>
                                        <Menu.Item><Navitems url={'/articles'} title={'Articles'} isSelected={pageId === "articles"} /></Menu.Item>
                                    </ul>
                                </nav>
                            </div>
                        </Menu.Items>

                    </div>
                </div>
            </Menu>
        </div>
    )
}

export default MobileNav