import { useEffect, useState } from 'react'

import Icon from '../Icons/MenuIcon'
import { Container, Close } from './styles'

function Erros(props) {
    const [bottom, setBottom] = useState('-300px')

    useEffect(() => {
        props.error? setBottom('0px') : setBottom('-300px')
    }, [props.error])

    return (
        <Container bottom={bottom}>
            <Close> <Icon onClick={props.close} size={20} name={'fechar'} /> </Close>
            {props.error}
        </Container>
    )
}

export default Erros