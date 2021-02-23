import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Head from 'next/head'
import axios from 'axios'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu'

function Index({ toggleTheme }) {
    const { colors } = useContext(ThemeContext)
    return(
        <>
            <Head>
                <title>Mundo Eletrônico</title>
                <link rel="icon" href="/icon.png" />
                <meta name='theme-color' content={colors.background}></meta>
            </Head>
            <Header toggleTheme={toggleTheme}/>
            <SideMenu />
        </>
    )
}

export default Index