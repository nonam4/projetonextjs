import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import icons from '../Icons'
import { Container, Settings, Svg } from './styles'

function Icon(props) {

    const { colors } = useContext(ThemeContext)

    return (
        <Svg viewBox="0 0 24 24" height={24} width={24} 
            className={props.className} onClick={props.onClick} title={props.title}>
                <path fill={colors.textos} d={icons[props.name]}/>
                
            {props.title && <title>{props.title}</title>}
        </Svg>
    )
}

function Header({toggleTheme}) {
    return (
        <Container>
            <Settings>
                <Icon name={'theme'} onClick={toggleTheme} title={'Tema Claro/Escuro'}/> 
                <Icon name={'download'} title={'Central de Downloads'}/>
                <Icon name={'logout'} title={'Logout'}/>
            </Settings>
            
        </Container>
    )
}

export default Header