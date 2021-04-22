const Test = (props) => {
    return (
        <h1 style={{textAlign:'center'}}>Страница Test </h1>
    )
    }
    
    export default Test
    
    
    export async function getStaticProps(context) {
        return {
          props: {
              title: 'Это тайтл страницы Test',
              description: 'Это description страницы  Test',
              keywords: 'Это keywords страницы  Test',
          },
          revalidate: 60
        }
      }