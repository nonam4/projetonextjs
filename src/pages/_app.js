import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import usePersistedState from '../utils/usePersistedState'
import axios from 'axios'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

function App({ Component, pageProps }) {
    const [theme, setTheme] = usePersistedState('theme', light)
    const [user, setUser] = usePersistedState('user', undefined)

    function toggleTheme() {
        setTheme(theme.title === 'light' ? dark : light)
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} toggleTheme={toggleTheme} user={user} setUser={setUser} />
        </ThemeProvider>
    )
}

export default App
