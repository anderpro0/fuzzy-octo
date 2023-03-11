/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export async function getStaticProps() {
    return {
        props: {
            pageId: "articles"
        }
    }
}

const articles = () => {
    return (
        <main>
            <div className="sm:px-8 mt-16 sm:mt-32">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <header className="max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Documenting my journey, writing on tools and ideas used in shaping the web.</h1>
                                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                    I'm really not the writer guy, but I'm fast becoming it. It's been very helpful documenting basic programming principles, design ideas and tools I learn on the go.
                                </p>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default articles