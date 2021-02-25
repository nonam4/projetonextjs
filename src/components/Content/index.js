import Icon from '../Icons/MenuIcon'
import { Container, Header, User, Avatar, Photo, Settings, SettingsItem, View } from './styles'

function Content({ toggleTheme, expanded, desktop, children }) {
    return (
        <Container expanded={expanded} desktop={desktop}>
            <Header>
                <User>
                    <Avatar>
                        <Photo src='https://alunos.b7web.com.br/media/avatars/5ff4c7550de9b42dbacd7847.jpg'/>
                        Luiz Carlos
                    </Avatar>
                    <Settings>
                        <SettingsItem> <Icon name={'list-user'} /> Perfil </SettingsItem>
                        <SettingsItem onClick={toggleTheme}> <Icon name={'theme'} /> Tema Claro / Escuro </SettingsItem>
                        <SettingsItem> <Icon name={'logout'} /> Logout </SettingsItem>
                    </Settings>
                </User>
            </Header>
            <View>
                {children}
            </View>
        </Container>
    )
}

export default Content