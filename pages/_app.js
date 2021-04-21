import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';

import '../styles/style.scss'
import MainLayer from '../layer/default'
import {AppBar} from "@material-ui/core";
function MyApp({ Component, pageProps }) {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainLayer props={{...pageProps}}>
                <Component {...pageProps} />
            </MainLayer>
        </ThemeProvider>
    )
}

export default MyApp
