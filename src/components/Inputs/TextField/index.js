import { useEffect, useState } from 'react'

import Icon from '../../Icons/MenuIcon'
import { Container, Input, Label, Content, Highlight, Viewer } from './styles'

function TextField(props) {
    const settings = {
        type: 'text',
        placeholder: 'Digite aqui...',
        icon: 'undefined',
        maxLenght: 23,
    }
    const [shown, setShown] = useState(false)
    const [type, setType] = useState(props.type || settings.type)

    function handleType() {
        props.type === 'password'? shown? setType('text') : setType('password') : setType('text')
    }

    useEffect(() => {
        handleType()
    }, [shown])

    return (
        <Container>
            <Input type={type} onChange={props.onChange} value={props.value} maxLength={props.maxLenght || settings.maxLenght} placeholder={' '}/>
            <Content> 
                <Icon name={props.icon || settings.icon} /> 
                <Label> {props.placeholder || settings.placeholder} </Label>
                <Highlight />
            </Content>
            {props.type === 'password' && <Viewer onClick={() => setShown(!shown)}> <Icon size={20} name={shown? 'senha_esconder': 'senha_mostrar'} /> </Viewer>}
        </Container>
    )
}

export default TextField