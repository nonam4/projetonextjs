import { Container, Logo, TextFileds} from './styles'

function Login({ children }) {

    return (
        <Container>
            <Logo src='/icon.png' />
            {children}
        </Container>
    )
}
export function TextContainer(props) {
    const settings = {
        width: '250px',
        height: '50px',
    }
    return (
        <TextFileds width={props.width || settings.width} height={props.height || settings.height}>
            {props.children}
        </TextFileds>
    )
}

export default Login