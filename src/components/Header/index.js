import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Icons from '../Icons'
import { Container, LogoContainer, Logo, Texto, Settings } from './styles'

function Header({toggleTheme}) {
    const { colors } = useContext(ThemeContext)

    return (
        <Container>
            <LogoContainer>
                <Logo src='/icon.png'></Logo>
                <Texto src='/nome.png'></Texto>
            </LogoContainer>
            <Settings>
                <Icons name={'theme'} onClick={toggleTheme} title={'Tema Claro/Escuro'}/> 
                <Icons name={'download'} title={'Central de Downloads'}/>
                <Icons name={'logout'} title={'Logout'}/>
            </Settings>
            
        </Container>
    )
}

export default Header

/*
<div>
                    <Stroke>
                        <Stroke>MUNDO</Stroke><br></br><Stroke>ELETRONICO</Stroke>
                    </Stroke>
                    <TextContainer>
                        <Text>MUNDO</Text><br></br><Text>ELETRONICO</Text>
                    </TextContainer>
                </div>

                */