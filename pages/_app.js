import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';

import '../styles/style.scss'
import MainLayer from '../layer/Main'
import TestLayer from '../layer/Test'
import {AppBar} from "@material-ui/core";
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
    const router = useRouter()
console.log('router', router)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
          {router.route === '/test' ? 
         <TestLayer props={{...pageProps}}><Component {...pageProps} /></TestLayer> : 
          <MainLayer props={{...pageProps}}><Component {...pageProps} /></MainLayer>}
        </ThemeProvider>
    )
}

export default MyApp
