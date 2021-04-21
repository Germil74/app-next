import Button from '@material-ui/core/Button';
import PersistentDrawerLeft from '../components/Panel'

const Home = (props) => {
    return (
        <>
         
            <h1>Привет Next.js</h1>


            <Button variant="contained" color="primary">
                Hello World
    </Button>
        </>
    )
}
export default Home



export async function getStaticProps(context) {
    return {
        props: {
            title: 'Это тайтл главной страницы',
            description: 'Это description главной страницы',
            keywords: 'Это keywords главной страницы',
        },
    }
}