import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import Head from "next/head"
import Homenav from './Navbar/Homenav';


function Layout({ children }: any) {

    return (

        <>
            <Head>
                <title>orlo</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div>
                <body className='flex h-full flex-col bg-zinc-50dark:bg'>

                    <div className='relative inset-0 flex justify-center sm:px-8'>
                        <div className="flex w-full max-w-7xl lg:px-8">
                            <div className="w-full bg-white">
                                <Navbar pageId={children.props.pageId} />
                                {/* <Homenav pageId={children.props.pageId} /> */}
                                <main>{children}</main>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </body>
            </div>

        </>
    )
}
export default Layout;