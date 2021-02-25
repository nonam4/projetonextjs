import { Container, Logo} from './styles'

function Login({ children }) {

    return (
        <Container>
            <Logo src='/icon.png' />
            {children}
        </Container>
    )
}

export default Login