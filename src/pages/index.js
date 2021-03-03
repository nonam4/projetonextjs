import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios'

import Content from '../components/Content'
import SideMenu from '../components/SideMenu'
import Load from '../components/Load'

function Index(props) {
    const router = useRouter()
    const { colors } = useContext(ThemeContext)
    const [expanded, setExpanded] = useState(false)
    const [desktop, setDesktop] = useState(false)
    const [load, setLoad] = useState(true)

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

    useEffect(() => {
        !props.user? router.push('/login') : setLoad(false)
    }, [props.user])

    function logout() {
        setLoad(true)
        props.setUser(null)
    }

    return(
        <>
            <Head>
                <title>Mundo Eletrônico</title>
                <link rel="icon" href="/icon.png" />
                <meta name='theme-color' content={colors.background}></meta>
            </Head>
            {props.user && <Content { ...props} expanded={expanded} desktop={desktop} logout={logout}>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                <br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                <br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                <br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                <br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                Em desenvolvimento...<br/>
                
            </Content>}
            <SideMenu expanded={expanded} setExpanded={setExpanded} desktop={desktop}/>
            <Load show={load}/>
        </>
    )
}

export default Index