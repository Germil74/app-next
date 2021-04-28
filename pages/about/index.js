const About = (props) => {
return (
    <h1 style={{textAlign:'center'}}>Страница о нас </h1>
)
}

export default About


export async function getStaticProps(context) {
    return {
      props: {
          title: 'Это тайтл страницы О Нас',
          description: 'Это description страницы  О Нас',
          keywords: 'Это keywords страницы  О Нас',
      },
      revalidate: 60
    }
  }