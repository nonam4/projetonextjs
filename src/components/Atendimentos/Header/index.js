import Icon from '../../Icons/MenuIcon'
import TextField from '../../Inputs/TextField'

import { Container, Dropdown, DropdownItem, Foto, Settings, SettingsItem, FilterOption, FilterIndicator } from './styles'

function Header(props) {

    return (
        <Container>
            <Dropdown>
                <DropdownItem>
                    <Foto src={props.user.foto}/>
                    {props.user.nome}
                </DropdownItem>
                <Settings right={'-3'}>
                    <SettingsItem> <Icon name={'usuario_editar'} /> Perfil </SettingsItem>
                    <SettingsItem onClick={props.toggleTheme}> <Icon name={'tema'} /> Tema Claro / Escuro </SettingsItem>
                    <SettingsItem onClick={props.handleLogout}> <Icon name={'logout'} /> Logout </SettingsItem>
                </Settings>
            </Dropdown>
            <Dropdown>
                <DropdownItem>
                    {props.busca != '' && <FilterIndicator />}
                    <Icon name={'filtros'} margin={'0'} title={'Filtros'}/>
                </DropdownItem>
                <Settings right={'-90'}>
                    <FilterOption>
                        <TextField onChange={(e) => props.setBusca(e.target.value)} value={props.busca} placeholder={'Buscar...'} icon={'buscar'}/>
                    </FilterOption>
                </Settings>
            </Dropdown>
        </Container>
    )
}

export default Header