import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import icons from '../Icons'
import { Container, User, Avatar, Photo, Settings, SettingsItem, Svg, SettingsSvg } from './styles'

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

function SettingsIcon(props) {
    const { colors } = useContext(ThemeContext)
    return (
        <SettingsSvg viewBox="0 0 24 24" height={24} width={24} margin={'.8'}
            className={props.className} onClick={props.onClick}>
                <path fill={colors.textos} d={icons[props.name]}/>                
        </SettingsSvg>
    )
}

function Header({toggleTheme}) {
    return (
        <Container>
            <User>
                <Avatar>
                    <Photo src='https://alunos.b7web.com.br/media/avatars/5ff4c7550de9b42dbacd7847.jpg'/>
                    Luiz Carlos
                </Avatar>
                <Settings>
                    <SettingsItem> <SettingsIcon name={'list-user'} /> Perfil </SettingsItem>
                    <SettingsItem onClick={toggleTheme}> <SettingsIcon name={'theme'} /> Tema Claro / Escuro </SettingsItem>
                    <SettingsItem> <SettingsIcon name={'logout'} /> Logout </SettingsItem>
                </Settings>
            </User>
        </Container>
    )
}

export default Header