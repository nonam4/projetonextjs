import { useState, useEffect } from 'react'
import axios from 'axios'

import { Container, View } from './styles'
import Header from './Header'

function Atendimentos(props) {

    const [busca, setBusca] = useState('')
    //variaveis de buscas do database
    //const [atendimentosFiltrados, setAtendimentosFiltrados] = useState({}) //clientes locais filtrados pelo campo de busca

    useEffect(() => {
        getDatabaseData()
    }, [])

    /*
    //quando for alterado o campo de busca, o sistema mostrará os dados correspondentes
    //se a busca for valida, irá filtrar localmente os dados
    //se limpar a busca, irá buscar novamente os dados no servidor
    useEffect(() => {
        //if(busca !== '') { setAtendimentosFiltrados(filtrarAtendimentosPorBusca(atendimentos, busca)) }
    }, [busca])
    */

    async function getDatabaseData() {
        props.setLoad(true)
        let {username, password} = props.user

        //reconferir os dados de autenticação salvos
        axios.post('/api/login', { username, password }).then(async res => {
            //atualiza o usuario localmente
            props.setUser({...res.data, password, temporary: props.user.temporary})

            //começa a buscar os dados no servidor
            //let dbClients = await axios.get('/api/getclients', {params: { filters }})
            //setClients(dbClients.data)

            //por fim esconde o load
            props.setLoad(false)
        }).catch(err => {
            console.error(err)
            handleLogout()
        })
    }
    
    function handleLogout() {
        props.setLoad(true)
        props.setUser(null)
    }

    /*
    function filtrarAtendimentosPorBusca(clientes, filtro) {

        function limparString(str) {
            return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        }
    
        function compararString(compare, str) {
            if(compare.indexOf(str) > -1) return true
            return false
        }
    
        const busca = limparString(filtro)
        return () => {
            let filtrados = {}
            for(let id in clientes) {
            
                let cliente = clientes[id]
                let match = false
        
                if(compararString(limparString(cliente.nomefantasia), busca)
                || compararString(limparString(cliente.razaosocial), busca)) match = true
        
                for(let serial in cliente.impressoras) {
                    if(compararString(limparString(serial), busca)) match = true
                }
        
                if(match) filtrados[cliente.id] = cliente
            }
            return filtrados
        }
    }
    */

    return (
        <Container expanded={props.expanded} desktop={props.desktop}>
            <Header {...props} busca={busca} setBusca={setBusca} handleLogout={handleLogout}/>
            <View>
                Atendimentos
            </View>
        </Container>
    )
}

export default Atendimentos