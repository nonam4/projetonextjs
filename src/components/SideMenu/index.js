import Link from 'next/link'
import { version } from '../../../package.json'

import MenuIcon from '../Icons/MenuIcon'
import { Expansor, Container, Footer, Logo, Texts, Text, Actions, MenuSection, MenuTitle, MenuItem} from './styles'

function SideMenu({ expanded, setExpanded, desktop }) {
    return (
        <Container expanded={expanded} desktop={desktop}>
            {!desktop && 
                <Expansor expanded={expanded} onClick={() => setExpanded(!expanded)} >
                    <MenuIcon size={'18'} margin={'0'} title={'Expandir/Recolher'} name={expanded? 'arrow_lft' : 'arrow_rgt'}/>
                </Expansor>}

            <Actions>
                <MenuSection>
                    <MenuTitle>GERAL</MenuTitle>
                    <MenuItem> <MenuIcon name={'dashboard'} /> Dashboard </MenuItem>
                    <MenuItem> <MenuIcon name={'suprimentos_listar'} /> Suprimentos </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuTitle>CLIENTES/FORNECEDORES</MenuTitle>
                    <MenuItem> <MenuIcon name={'usuario_listar'} /> Listar </MenuItem>
                    <MenuItem> <MenuIcon name={'usuario_adicionar'} /> Cadastrar </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuTitle>LOCAÇÃO</MenuTitle>
                    <MenuItem> <MenuIcon name={'status_nenhuma'} /> Listar Impressoras </MenuItem>
                    <MenuItem> <MenuIcon name={'atendimento_listar'} /> Listar Atendimentos </MenuItem>
                    <MenuItem> <MenuIcon name={'atendimento_adicionar'} /> Novo Atendimento </MenuItem>
                </MenuSection>
            </Actions>

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