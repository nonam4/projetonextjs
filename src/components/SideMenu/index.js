import React from 'react'
import Link from 'next/link'
import { version } from '../../../package.json'

import UnderlineIcon from '../Icons/UnderlineIcon'
import MenuIcon from '../Icons/MenuIcon'
import { Container, Footer, Logo, Texts, Text, MenuSection, MenuTitle, MenuItem} from './styles'

function SideMenu({ expanded, setExpanded, desktop }) {
    return (
        <Container expanded={expanded} desktop={desktop}>
            <UnderlineIcon onClick={() => setExpanded(!expanded)} expanded={expanded} title={'Expandir/Recolher'} name={expanded? 'colapse' : 'expand'}/>

            <MenuSection>
                <MenuTitle>GERAL</MenuTitle>
                <MenuItem> <MenuIcon name={'dashboard'} title={'Dashboard'} /> Dashboard </MenuItem>
                <MenuItem> <MenuIcon name={'estoque'} title={'Suprimentos'} /> Suprimentos </MenuItem>
            </MenuSection>
            <MenuSection>
                <MenuTitle>PESSOAS</MenuTitle>
                <MenuItem> <MenuIcon name={'list-user'} title={'Listar'} /> Listar </MenuItem>
                <MenuItem> <MenuIcon name={'add-user'} title={'Cadastrar'} /> Cadastrar </MenuItem>
            </MenuSection>
            <MenuSection>
                <MenuTitle>LOCAÇÃO</MenuTitle>
                <MenuItem> <MenuIcon name={'sem-impressora'} /> Listar Impressoras </MenuItem>
                <MenuItem> <MenuIcon name={'listar-atendimento'} /> Listar Atendimentos </MenuItem>
                <MenuItem> <MenuIcon name={'novo-atendimento'} /> Novo Atendimento </MenuItem>
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