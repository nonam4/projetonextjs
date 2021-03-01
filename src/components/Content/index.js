import Icon from '../Icons/MenuIcon'
import { Container, Header, User, Avatar, Photo, Settings, SettingsItem, View } from './styles'

function Content(props) {
    return (
        <Container expanded={props.expanded} desktop={props.desktop}>
            <Header>
                <User>
                    <Avatar>
                        <Photo src={props.user.photo}/>
                        {props.user.nome}
                    </Avatar>
                    <Settings>
                        <SettingsItem> <Icon name={'list-user'} /> Perfil </SettingsItem>
                        <SettingsItem onClick={props.toggleTheme}> <Icon name={'theme'} /> Tema Claro / Escuro </SettingsItem>
                        <SettingsItem onClick={props.logout}> <Icon name={'logout'} /> Logout </SettingsItem>
                    </Settings>
                </User>
            </Header>
            <View>
                {props.children}
            </View>
        </Container>
    )
}

export default Content