import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'styled-components'
import Head from 'next/head'
import axios from 'axios'
import { useRouter } from 'next/router'

import Content from '../components/Login'
import TextField from '../components/Inputs/TextField'
import Checkbox from '../components/Inputs/Checkbox'
import Button from '../components/Inputs/Button'
import Erros from '../components/Errors'
import Load from '../components/Load'

function Login(props) {
    const router = useRouter()
    const { colors } = useContext(ThemeContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [temporary, setTemporary] = useState(true) //tempary login or should persist?
    const [error, setError] = useState(false)
    const [showError, setShowError] = useState(false)
    const [load, setLoad] = useState(true)

    //se o usuário estiver salvo no localStorage já fará o login imediatamente
    useEffect(() => {
        props.user? router.push('/') : setLoad(false)
    }, [props.user])

    function handleLogin() {
        setLoad(true)
        if(checkForm()) {
            //não precisa verificar o código da request, se o código da resposta for diferente de 200, será considerado erro
            axios.post('/api/login', { username, password }).then(res => {
                props.setUser({...res.data, password, temporary})
            }).catch(err => {
                showErrors('Usuário ou senha incorretos!') 
            })
        } 
    }

    function checkForm() {
        if(username.length > 3) {
            if(password.length > 3) {
                return true
            } else {
                showErrors('Senha em branco ou inválida!')
                return false
            }
        } else {
            showErrors('Usuário em branco ou inválido!')
            return false
        }
    }

    function showErrors(msg) {
        setLoad(false)
        setShowError(true)
        setTimeout(() => {
            setError(msg)
        }, 100)

        setTimeout(() => {
            hideErrors()
        }, 7000)
    }

    function hideErrors() {
        setError(false)
        setTimeout(() => {
            setShowError(false)
        }, 150)
    }

    return(
        <>
            <Head>
                <title>Mundo Eletrônico</title>
                <link rel="icon" href="/icon.png" />
                <meta name='theme-color' content={colors.background}></meta>
            </Head>
            <Content>
                <TextField onChange={(e) => setUsername(e.target.value)} value={username} placeholder={'Usuário'} icon={'list-user'} />
                <TextField onChange={(e) => setPassword(e.target.value)} value={password} placeholder={'Senha'} icon={'chave'} type={'password'} />
                <Checkbox text={'Ficar conectado'} changeReturn={ () => setTemporary(!temporary) } />
                <Button text={'Entrar'} onClick={ handleLogin } />
            </Content>
            {showError && <Erros close={ hideErrors } error={error} />}
            <Load show={load}/>
        </>
    )
}

export default Login