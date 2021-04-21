import Link from 'next/link'


const A = ({ children, href}) => {

    return (
        <Link href={href}>
            <a>
                {children}
            </a>
        </Link>
    )
}

export default A