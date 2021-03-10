import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Container } from './styles'

function Button(props) {
    const { colors } = useContext(ThemeContext)
    const settings = {
        text: 'Clique aqui...',
        width: '250px',
        height: '50px',
        background: colors.hover,
    }

    return (
        <Container background={props.background || settings.background} width={props.width || settings.width} height={props.height || settings.height} onClick={props.onClick}>
            {props.text || settings.text}
        </Container>
    )
}

export default Button