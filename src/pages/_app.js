import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import usePersistedState from '../utils/usePersistedState'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

function App({ Component, pageProps }) {
    const [theme, setTheme] = usePersistedState('theme', light)

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} toggleTheme={toggleTheme} />
            </ThemeProvider>
        </>
    )
}

export default App
