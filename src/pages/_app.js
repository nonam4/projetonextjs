import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import usePersistedState from '../utils/usePersistedState'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

import Load from '../components/Load'

function App({ Component, pageProps }) {
    const [theme, setTheme] = usePersistedState('theme', light)
    const [user, setUser] = usePersistedState('user', undefined)
    const [load, setLoad] = useState(true)

    function toggleTheme() {
        setTheme(theme.title === 'light' ? dark : light)
    }

    useEffect(() => {
        window.focus()
        if (document.activeElement) document.activeElement.blur()
    }, [load])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} toggleTheme={toggleTheme} user={user} setUser={setUser} setLoad={setLoad} />
            <Load show={load}/>
        </ThemeProvider>
    )
}

export default App
