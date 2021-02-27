import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'styled-components'
import Head from 'next/head'
import axios from 'axios'

import Content from '../components/Login'
import TextField from '../components/Inputs/TextField'
import Button from '../components/Inputs/Button'
import Checkbox from '../components/Inputs/Checkbox'

function Login({ toggleTheme }) {
    const { colors } = useContext(ThemeContext)
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    //stay logged
    const [stay, setStay] = useState(false)
    const [error, setError] = useState(false)

    function handleLogin() {
        console.log(`trying to login and should stay logged? ${stay}`)
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
        </>
    )
}

export default Login