import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { version } from '../../../package.json'
import { ThemeContext } from 'styled-components'

import icons from '../Icons'
import { Container, Expansor, Footer, Logo, Texts, Text, MenuSection, MenuTitle, MenuItem, Svg} from './styles'

function Icon(props) {
    const { colors } = useContext(ThemeContext)
    return (
        <Svg viewBox="0 0 24 24" height={20} width={20} margin={'.8'}
            className={props.className} onClick={props.onClick} title={props.title}>
                <path fill={colors.textos} d={icons[props.name]}/>
                {props.title && <title>{props.title}</title>}
        </Svg>
    )
}

function ExpansorIcon(props) {
    const { colors } = useContext(ThemeContext)
    return (
        <Expansor onClick={props.onClick} expanded={props.expanded} viewBox="0 0 24 24" height={24} width={24} title={'Expandir/Recolher'}>
            <path fill={colors.textos} d={icons[props.expanded? 'colapse' : 'expand']}/>
            <title>{'Expandir/Recolher'}</title>    
        </Expansor>
    )
}

function SideMenu() {
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        function handleResize() {
            window.innerWidth > 760 ? setExpanded(true) : setExpanded(false)
        }

        handleResize()
        
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Container expanded={expanded}>
            <ExpansorIcon onClick={() => setExpanded(!expanded)} expanded={expanded}/>

            <MenuSection>
                <MenuTitle>GERAL</MenuTitle>
                <MenuItem> <Icon name={'dashboard'} title={'Dashboard'} /> Dashboard </MenuItem>
                <MenuItem> <Icon name={'estoque'} title={'Suprimentos'} /> Suprimentos </MenuItem>
            </MenuSection>
            <MenuSection>
                <MenuTitle>PESSOAS</MenuTitle>
                <MenuItem> <Icon name={'list-user'} title={'Listar'} /> Listar </MenuItem>
                <MenuItem> <Icon name={'add-user'} title={'Cadastrar'} /> Cadastrar </MenuItem>
            </MenuSection>
            <MenuSection>
                <MenuTitle>LOCAÇÂO</MenuTitle>
                <MenuItem> <Icon name={'sem-impressora'} title={'Listar Impressoras'} /> Listar Impressoras </MenuItem>
                <MenuItem> <Icon name={'listar-atendimento'} title={'Listar Atendimentos'} /> Listar Atendimentos </MenuItem>
                <MenuItem> <Icon name={'novo-atendimento'} title={'Novo Atendimento'} /> Novo Atendimento </MenuItem>
            </MenuSection>

            <Footer>
                <Logo src='/icon.png'/>
                <Texts>
                    <Link href='/'>
                        <Text>Home</Text>
                    </Link>
                    <Link href='/'>
                        <Text>Downloads</Text>
                    </Link>
                    <Text>Upload</Text>
                </Texts>
                Versão {version}
            </Footer>
        </Container>        
    )
}

export default SideMenu