import { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import Head from 'next/head'
import axios from 'axios'

import Content from '../components/Login'
import TextField from '../components/Inputs/TextField'

function Login({ toggleTheme }) {
    const { colors } = useContext(ThemeContext)
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    return(
        <>
            <Head>
                <title>Mundo Eletrônico</title>
                <link rel="icon" href="/icon.png" />
                <meta name='theme-color' content={colors.background}></meta>
            </Head>
            <Content>
                <TextField onChange={(e) => setUser(e.target.value)} value={user} placeholder={'Usuário'} icon={'list-user'}/>
                <TextField onChange={(e) => setPass(e.target.value)} value={pass} placeholder={'Senha'} icon={'chave'} type={'password'} />
            </Content>
        </>
    )
}

export default Login