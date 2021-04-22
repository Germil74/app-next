import Head from 'next/head'

const TestLayer = ({ children }) => {
    console.log('TestLayer-props', children[1])
    const title = children.props.title || 'title'
    const description = children.props.description || 'description'
    const keywords = children.props.keywords || 'keywords'
    
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
           
                {children}
           
        </>
    )

}

export default TestLayer
