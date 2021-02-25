import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import Head from 'next/head'
import axios from 'axios'

import Content from '../components/Content'
import SideMenu from '../components/SideMenu'

function Index({ toggleTheme }) {
    const { colors } = useContext(ThemeContext)
    const [expanded, setExpanded] = useState(false)
    const [desktop, setDesktop] = useState(false)

    useEffect(() => {
        function handleResize() {
            let condition = window.innerWidth > 760
            setDesktop(condition)
        }
        
        setExpanded(window.innerWidth > 760)
        handleResize()
        
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return(
        <>
            <Head>
                <title>Mundo Eletrônico</title>
                <link rel="icon" href="/icon.png" />
                <meta name='theme-color' content={colors.background}></meta>
            </Head>
            <Content toggleTheme={toggleTheme} expanded={expanded} desktop={desktop}>
            </Content>
            <SideMenu expanded={expanded} setExpanded={setExpanded} desktop={desktop}/>
        </>
    )
}

export default Index