import { useState, useEffect } from 'react'
import axios from 'axios'

import { Container, View } from './styles'
import Header from '../Header'
import Impressoes from '../ClienteResumo'

function Index(props) {

    const [busca, setBusca] = useState('')
    //variaveis de buscas do database
    const filterDefaults = {listando: 'todos', data: getDatas()[0].value}
    const [filters, setFilters] = useState(filterDefaults) //define um filtro base com a primeira data que o sistema conseguir
    const [clients, setClients] = useState({}) //clientes recebidos do servidor
    const [clientsFiltrados, setClientsFiltrados] = useState({}) //clientes locais filtrados pelo campo de busca

    //quando os filtros forem alterados irá fazer um novo pedido dos dados no DB
    useEffect(() => {
        getDatabaseData()
    }, [filters])

    //quando for alterado o campo de busca, o sistema mostrará os dados correspondentes
    //se a busca for valida, irá filtrar localmente os dados
    //se limpar a busca, irá buscar novamente os dados no servidor
    useEffect(() => {
        if(busca !== '') { setClientsFiltrados(filtrarClientesPorBusca(clients, busca)) }
    }, [busca])

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

            //por fim esconde o load
            props.setLoad(false)
        }).catch(err => {
            console.error(err)
            //handleLogout()
        })
    }

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

    return (
        <Container expanded={props.expanded} desktop={props.desktop}>
            <Header {...props} filters={filters} setFilters={setFilters} filterDefaults={filterDefaults} busca={busca} setBusca={setBusca} getDatas={getDatas}/>
            <View>
                { Object.keys(busca == ''? clients : clientsFiltrados).map(id => <Impressoes key={id} client={clients[id]} filters={filters} />) }
            </View>
        </Container>
    )
}

export default Index