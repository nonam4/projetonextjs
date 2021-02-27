import { useState } from 'react'
import { Container, Input, Label } from './styles'

function Checkbox(props) {
    const [checked, setChecked] = useState(false)
    const settings = {
        text: 'Clique aqui...',
        width: '250px',
        height: '22px',
    }

    function handleChecked() {
        setChecked(!checked)
        props.changeReturn()
    }

    return (
        <Container width={props.width? props.width : settings.width} height={props.height? props.height : settings.height} >
            <Input checked={checked} onChange={handleChecked}/>
            <Label  onClick={handleChecked}> {props.text? props.text : settings.text} </Label>
        </Container>
    )
}

export default Checkbox