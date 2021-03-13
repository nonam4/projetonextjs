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

    for(var x = 0; x < 4; x++) {
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

function filtrarClientesPorBusca(clientes, filtro) {

    function limparString(str) {
        return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    }

    function compararString(compare, str) {
        if(compare.indexOf(str) > -1) return true
        return false
    }

    const busca = limparString(filtro)
    let volta = {}

    for(let id in clientes) {
        
        let cliente = clientes[id]
        let match = false

        if(compararString(limparString(cliente.nomefantasia), busca)
        || compararString(limparString(cliente.razaosocial), busca)) match = true

        for(let serial in cliente.impressoras) {
            if(compararString(limparString(serial), busca)) match = true
        }

        if(match) volta[cliente.id] = cliente
    }
    return volta
}

function Index(props) {
    const router = useRouter()
    const { colors } = useContext(ThemeContext)
    const [buscasLiberadas, setBuscasLiberadas] = useState(false)
    const [expanded, setExpanded] = useState(false) //define se o menu lateral esta aberto ou fechado
    const [desktop, setDesktop] = useState(false) //verifica se o sistema está numa largura grande o suficiente pro menu lateral ficar sempre aberto
    const [busca, setBusca] = useState('')
    //variaveis de buscas do database
    const filterDefaults = {listando: 'todos', data: getDatas()[0].value}
    const [filters, setFilters] = useState(filterDefaults) //define um filtro base com a primeira data que o sistema conseguir
    const [clients, setClients] = useState({}) //clientes recebidos do servidor
    const [clientsFiltrados, setClientsFiltrados] = useState({}) //clientes locais filtrados pelo campo de busca

    //monitora redimensionamentos da tela
    useEffect(() => {
        if(props.user) getDatabaseData()
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

    //quando os filtros forem alterados irá fazer um novo pedido dos dados no DB
    useEffect(() => {
        if(buscasLiberadas) getDatabaseData()
    }, [filters])

    //quando for alterado o campo de busca, o sistema mostrará os dados correspondentes
    //se a busca for valida, irá filtrar localmente os dados
    //se limpar a busca, irá buscar novamente os dados no servidor
    useEffect(() => {
        if(busca !== '') { setClientsFiltrados(filtrarClientesPorBusca(clients, busca)) }
    }, [busca])

    function handleLogout() {
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

            //começa a buscar os dados no servidor
            let dbClients = await axios.get('/api/getclients', {params: { filters }})
            setClients(dbClients.data)

            //por fim esconde o load e confere se as buscas estão liberadas
            props.setLoad(false)
            if(!buscasLiberadas) setBuscasLiberadas(true)
        }).catch(err => {
            console.error(err)
            handleLogout()
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
            <Content { ...props} expanded={expanded} desktop={desktop} handleLogout={handleLogout} getDatas={getDatas} 
                filters={filters} setFilters={setFilters} busca={busca} setBusca={setBusca} filterDefaults={filterDefaults}>

                { Object.keys(busca == ''? clients : clientsFiltrados).map(id => <Impressoes key={id} client={clients[id]} filters={filters} />) }
            </Content>}
            <SideMenu expanded={expanded} setExpanded={setExpanded} desktop={desktop}/>
        </>
    )
}

export default Index