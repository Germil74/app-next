const Documentation = (props) => {
    return (
        <h1>Страница Документы</h1>
    )
    }
    
    export default Documentation
    
    
    export async function getStaticProps(context) {
        return {
          props: {
              title: 'Это тайтл страницы Документы',
              description: 'Это description страницы  Документы',
              keywords: 'Это keywords страницы  Документы',
          },
          revalidate: 60
        }
      }