import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'styled-components'
import Head from 'next/head'
import axios from 'axios'
import { useRouter } from 'next/router'

import Content, { TextContainer } from '../components/Login'
import TextField from '../components/Inputs/TextField'
import Checkbox from '../components/Inputs/Checkbox'
import Button from '../components/Inputs/Button'
import Erros from '../components/Errors'

function Login(props) {
    const router = useRouter()
    const { colors } = useContext(ThemeContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [temporary, setTemporary] = useState(true) //login temporário ou definitivo?
    const [error, setError] = useState(false)
    const [showError, setShowError] = useState(false)

    //se o usuário estiver salvo no localStorage já fará o login imediatamente
    useEffect(() => {
        props.user? router.push('/') : props.setLoad(false)
    }, [props.user])

    function handleLogin() {
        props.setLoad(true)
        if(checkForm()) {
            //não precisa verificar o código da request, se o código da resposta for diferente de 200, será considerado erro
            axios.post('/api/login', { username, password }).then(res => {
                props.setUser({...res.data, password, temporary})
            }).catch(err => {
                console.error(err)
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
        props.setLoad(false)
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
                <TextContainer>
                    <TextField onChange={(e) => setUsername(e.target.value)} value={username} placeholder={'Usuário'} icon={'usuario'} />
                </TextContainer>
                <TextContainer> 
                    <TextField onChange={(e) => setPassword(e.target.value)} value={password} placeholder={'Senha'} icon={'coletor_chave'} type={'password'} />
                </TextContainer>
                <Checkbox text={'Ficar conectado'} changeReturn={ () => setTemporary(!temporary) } />
                <Button text={'Entrar'} onClick={ handleLogin } />
            </Content>
            {showError && <Erros close={ hideErrors } error={error} />}
        </>
    )
}

export default Login