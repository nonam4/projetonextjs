import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'styled-components'
import Head from 'next/head'
import axios from 'axios'

import Content from '../components/Login'
import TextField from '../components/Inputs/TextField'
import Button from '../components/Inputs/Button'
import Checkbox from '../components/Inputs/Checkbox'
import Erros from '../components/Errors'

function Login({ toggleTheme }) {
    const { colors } = useContext(ThemeContext)
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [stay, setStay] = useState(false) //stay logged
    const [error, setError] = useState(false)
    const [showError, setShowError] = useState(false)

    function handleLogin() {
        if(checkForm()) {
            console.log(`trying to login, should stay logged? ${stay}`)
        } 
    }

    function checkForm() {
        if(user.length > 3) {
            if(pass.length > 3) {
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
                <TextField onChange={(e) => setUser(e.target.value)} value={user} placeholder={'Usuário'} icon={'list-user'} />
                <TextField onChange={(e) => setPass(e.target.value)} value={pass} placeholder={'Senha'} icon={'chave'} type={'password'} />
                <Checkbox text={'Ficar conectado'} changeReturn={ () => setStay(!stay) } />
                <Button text={'Entrar'} onClick={ handleLogin } />
            </Content>
            {showError && <Erros close={ hideErrors } error={error} />}
        </>
    )
}

export default Login