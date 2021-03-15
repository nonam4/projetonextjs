import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'

import SideMenu from '../components/SideMenu'
import Impressoras from '../components/Impressoras'
import Atendimentos from '../components/Atendimentos'

function Index(props) {
    const router = useRouter()
    const { colors } = useContext(ThemeContext)
    const [expanded, setExpanded] = useState(false) //define se o menu lateral esta aberto ou fechado
    const [desktop, setDesktop] = useState(false) //verifica se o sistema está numa largura grande o suficiente pro menu lateral ficar sempre aberto
    const [listando, setListando] = useState('impressoras')
    
    //monitora redimensionamentos da tela
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
        desktop && !expanded && setExpanded(true)
    }, [desktop])

    //se o usário for inválido, jogará pra janela de login
    useEffect(() => {
        if(!props.user) { router.push('/login') }
    }, [props.user])

    function selectListagem() {
        switch(listando) {
            case 'impressoras':
                return <Impressoras {...props} expanded={expanded} desktop={desktop} />
            case 'atendimentos':
                return <Atendimentos {...props} expanded={expanded} desktop={desktop}/>
        }
    }

    return(
        <>
            <Head>
                <title>Mundo Eletrônico</title>
                <link rel="icon" href="/icon.png" />
                <meta name='theme-color' content={colors.background}></meta>
            </Head>
            {props.user && <>
                {selectListagem()}
                <SideMenu expanded={expanded} setExpanded={setExpanded} desktop={desktop} setListando={setListando}/>
            </>}
        </>
    )
}

export default Index