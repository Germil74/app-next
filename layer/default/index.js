import Head from 'next/head'
import PersistentDrawerLeft from '../../components/Panel'

const MainLayer = ({ children }) => {
    const title = children.props.title || 'title'
    const description = children.props.description || 'description'
    const keywords = children.props.keywords || 'keywords'
    console.log('MainLayer-props', children)
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}></meta>
                <meta name="keywords" content={keywords}></meta>
            </Head>
            <PersistentDrawerLeft>
                {children}
            </PersistentDrawerLeft>
        </>
    )

}

export default MainLayer