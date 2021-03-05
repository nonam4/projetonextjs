import { useContext, useState } from 'react'
import { ThemeContext } from "styled-components"

import { Container, Header, NomeContainer, Nome, Subnome, IconContainer, Line, LineItem, LineTitle, LineText, LineSubtext } from './styles'
import Icon from '../Icons/MenuIcon'

function Impressoes(props) {
    const { colors } = useContext(ThemeContext)
    const [hoverColor, setHoverColor] = useState(colors.azul)

    return (
        <Container hoverColor={hoverColor}>
            <Header>
                <NomeContainer>
                    <Nome>Mundo Eletrônico</Nome>
                    <Subnome>Mundo Eletrônico Locadora de Equipamentos EIRELI</Subnome>
                </NomeContainer>
                <IconContainer> <Icon color={colors.azul}/> </IconContainer>
            </Header>
            <Line>
                <LineItem>
                    <LineTitle>Impresso</LineTitle>
                    <LineText>000000 págs</LineText>
                </LineItem>
                <LineItem>
                    <LineTitle>Excedentes</LineTitle>
                    <LineText>000000 págs</LineText>
                </LineItem>
            </Line>
            <Line>
                <LineItem>
                    <LineTitle>Impressoras</LineTitle>
                    <LineSubtext>99</LineSubtext>
                </LineItem>
                <LineItem>
                    <LineTitle>Versão</LineTitle>
                    <LineSubtext>0.1.0</LineSubtext>
                </LineItem>
            </Line>
        </Container>
    )
}

export default Impressoes