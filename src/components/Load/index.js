import { useEffect, useState } from 'react'

import { Container, Logo, Loader, Circle, Spinner } from './styles'

function Load(props) {
    const [opacity, setOpacity] = useState('1')
    const [zindex, setZindex] = useState('99')

    useEffect(() => {
        props.show? setOpacity('1') : setTimeout(() => { setOpacity('0')}, 500)
        props.show? setZindex('99') : setTimeout(() => { setZindex('-1')}, 500)
    }, [props.show])

    return (
        <Container opacity={opacity} zindex={zindex}>
            <Logo src='/icon.png'/>
            <Loader>
                <Circle viewBox="25 25 50 50">
                    <Spinner cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10"/>
                </Circle>
            </Loader>
        </Container>
    )
}

export default Load