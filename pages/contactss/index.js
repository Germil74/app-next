const Contacts = (props) => {
    return (
        <h1 style={{textAlign:'center'}}>Страница Контакты </h1>
    )
    }
    
    export default Contacts
    
    
    export async function getStaticProps(context) {
        return {
          props: {
              title: 'Это тайтл страницы Контакты',
              description: 'Это description страницы  Контакты',
              keywords: 'Это keywords страницы  Контакты',
          },
          revalidate: 60
        }
      }