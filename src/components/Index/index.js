import Icon from '../Icons/MenuIcon'
import Select from '../Inputs/Select'
import { Container, Header, Dropdown, DropdownItem, Photo, Settings, SettingsItem, FilterOption, FilterItem, View, FilterIndicator } from './styles'

import TextField from '../Inputs/TextField'

function Index(props) {
    const listagens = [{
        value: 'todos',
        label: 'Todos'
    },{
        value: 'excedentes',
        label: 'Excedentes'
    },{
        value: 'atrasos',
        label: 'Atrasos'
    },{
        value: 'abastecimentos',
        label: 'Abastecimentos'
    },]

    function handleDataChange(e) {
        props.setFilters({...props.filters, data: e.target.value})
    }

    function handleListagemChange(e) {
        props.setFilters({...props.filters, listando: e.target.value})
    }

    return (
        <Container expanded={props.expanded} desktop={props.desktop}>
            <Header>
                <Dropdown>
                    <DropdownItem>
                        <Photo src={props.user.photo}/>
                        {props.user.nome}
                    </DropdownItem>
                    <Settings>
                        <SettingsItem> <Icon name={'usuario_editar'} /> Perfil </SettingsItem>
                        <SettingsItem onClick={props.toggleTheme}> <Icon name={'tema'} /> Tema Claro / Escuro </SettingsItem>
                        <SettingsItem onClick={props.handleLogout}> <Icon name={'logout'} /> Logout </SettingsItem>
                    </Settings>
                </Dropdown>
                <Dropdown>
                    <DropdownItem>
                        {(JSON.stringify(props.filters) != JSON.stringify(props.filterDefaults) || props.busca != '') && <FilterIndicator />}
                        <Icon name={'filtros'} margin={'0'} title={'Filtros'}/>
                    </DropdownItem>
                    <Settings>
                        <FilterOption>
                            <TextField onChange={(e) => props.setBusca(e.target.value)} value={props.busca} placeholder={'Buscar...'} icon={'buscar'}/>
                        </FilterOption>
                        <FilterOption> 
                            <FilterItem>
                                <Icon name={'calendario'} /> Datas 
                            </FilterItem>
                            <Select options={props.getDatas()} onChange={handleDataChange}/>
                        </FilterOption>
                        <FilterOption> 
                            <FilterItem>
                                <Icon name={'listando'} /> Listando
                            </FilterItem>
                            <Select options={listagens} onChange={handleListagemChange}/>
                        </FilterOption>
                        <SettingsItem> <Icon name={'relatorio'} /> Gerar Relatórios </SettingsItem>
                    </Settings>
                </Dropdown>
            </Header>
            <View>
                {props.children}
            </View>
        </Container>
    )
}

export default Index