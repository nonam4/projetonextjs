import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios'

import Content from '../components/Index'
import SideMenu from '../components/SideMenu'
import Impressoes from '../components/Impressoes'

function getDatas() {
    let datas = []
    let data = new Date()
    let ano = data.getFullYear()
    let mes = data.getMonth() + 1

    for(var x = 0; x < 4; x++){
        datas.push({value: ano + '.' + (mes < 10? `0${mes}` : mes), label: (mes < 10? `0${mes}` : mes) + '/' + ano})

        if(mes <= 1){
            mes = 12
            ano = ano - 1
        } else {
            mes--
        }
    }
    return datas
}

function Index(props) {
    const router = useRouter()
    const { colors } = useContext(ThemeContext)
    const [expanded, setExpanded] = useState(false)
    const [desktop, setDesktop] = useState(false)
    //variaveis de buscas do database
    const [filters, setFilters] = useState({listando: 'todos', data: getDatas()[0].value}) //define um filtro base com a primeira data que o sistema conseguir
    const [clients, setClients] = useState({})


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

    useEffect(() => {
        !props.user && router.push('/login')
    }, [props.user])

    useEffect(() => {
        console.log('called')
        props.user && getDatabaseData()
    }, [filters])

    function logout() {
        props.setLoad(true)
        props.setUser(null)
    }

    async function getDatabaseData() {
        props.setLoad(true)
        let {username, password} = props.user

        let res = await axios.post('/api/getclients', { username, password, filters })
        setClients(res.data)

        props.setLoad(false)
    }

    return(
        <>
            <Head>
                <title>Mundo Eletrônico</title>
                <link rel="icon" href="/icon.png" />
                <meta name='theme-color' content={colors.background}></meta>
            </Head>
            {props.user && 
            <Content { ...props} expanded={expanded} desktop={desktop} logout={logout} getDatas={getDatas} filters={filters} setFilters={setFilters}>

                { Object.keys(clients).map(id => <Impressoes key={id} client={clients[id]}/>) }
            </Content>}
            <SideMenu expanded={expanded} setExpanded={setExpanded} desktop={desktop}/>
        </>
    )
}

export default Index