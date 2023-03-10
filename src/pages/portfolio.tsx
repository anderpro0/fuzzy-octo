import React from 'react'

export async function getStaticProps() {
    return {
        props: {
            pageId: "portfolio"
        }
    }
}

const portfolio = () => {
    return (
        <div>portfolio</div>
    )
}

export default portfolio