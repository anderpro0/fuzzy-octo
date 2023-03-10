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

                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default articles