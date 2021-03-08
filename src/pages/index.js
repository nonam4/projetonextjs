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
    const [expanded, setExpanded] = useState(false) //define se o menu lateral esta aberto ou fechado
    const [desktop, setDesktop] = useState(false) //verifica se o sistema está numa largura grande o suficiente pro menu lateral ficar sempre aberto
    //variaveis de buscas do database
    const [filters, setFilters] = useState({listando: 'todos', data: getDatas()[0].value}) //define um filtro base com a primeira data que o sistema conseguir
    const [clients, setClients] = useState({}) //clientes do DB

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
        !props.user && router.push('/login')
    }, [props.user])

    //quando os filtros forem alterados irá fazer um novo pedido dos dados no DB
    useEffect(() => {
        props.user && getDatabaseData()
    }, [filters])

    function logout() {
        props.setLoad(true)
        props.setUser(null)
    }

    async function getDatabaseData() {
        props.setLoad(true)
        let {username, password} = props.user

        //reconferir os dados de autenticação salvos
        axios.post('/api/login', { username, password }).then(async res => {
            //atualiza o usuario localmente
            props.setUser({...res.data, password, temporary: props.user.temporary})

            //começa a buscar os dados no DB
            let dbClients = await axios.get('/api/getclients', {params: { filters }})
            setClients(dbClients.data)

            //por fim esconde o load
            props.setLoad(false)
        }).catch(err => {
            logout()
        })
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