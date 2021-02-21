import React, { useContext } from 'react'
import Link from 'next/link'
import { version } from '../../../package.json'
import { ThemeContext } from 'styled-components'

import icons from '../Icons'
import { Container, LogoContainer, Logo, MenuSection, MenuTitulo, MenuItem, Svg} from './styles'

function Icon(props) {

    const { colors } = useContext(ThemeContext)
    return (
        <Svg viewBox="0 0 24 24" height={20} width={20} 
            className={props.className} onClick={props.onClick} title={props.title}>
                <path fill={colors.textos} d={icons[props.name]}/>
                
            {props.title && <title>{props.title}</title>}
        </Svg>
    )
}

function SideMenu() {
    const { colors } = useContext(ThemeContext)

    return (
        <Container>
            <Link href='/'>
                <LogoContainer>
                    <Logo src='/icon.png'/>
                    Versão {version}
                </LogoContainer>
            </Link>

            <MenuSection>
                <MenuTitulo>GERAL</MenuTitulo>
                <MenuItem> <Icon name={'dashboard'} title={'Dashboard'} /> Dashboard </MenuItem>
                <MenuItem> <Icon name={'estoque'} title={'Suprimentos'} /> Suprimentos </MenuItem>
            </MenuSection>
            <MenuSection>
                <MenuTitulo>PESSOAS</MenuTitulo>
                <MenuItem> <Icon name={'list-user'} title={'Listar'} /> Listar </MenuItem>
                <MenuItem> <Icon name={'add-user'} title={'Cadastrar'} /> Cadastrar </MenuItem>
            </MenuSection>
            <MenuSection>
                <MenuTitulo>LOCAÇÂO</MenuTitulo>
                <MenuItem> <Icon name={'sem-impressora'} title={'Listar Impressoras'} /> Listar Impressoras </MenuItem>
                <MenuItem> <Icon name={'listar-atendimento'} title={'Listar Atendimentos'} /> Listar Atendimentos </MenuItem>
                <MenuItem> <Icon name={'novo-atendimento'} title={'Novo Atendimento'} /> Novo Atendimento </MenuItem>
            </MenuSection>
        </Container>
    )
}

export default SideMenu