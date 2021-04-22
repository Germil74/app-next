import Button from '@material-ui/core/Button';
import PersistentDrawerLeft from '../components/Panel'

const Home = (props) => {
    return (
        <>  
            <h1 style={{textAlign:'center'}}>Главная страница. Здесь ведутся работы.</h1>
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