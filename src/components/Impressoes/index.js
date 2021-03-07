import { useContext, useState } from 'react'
import { ThemeContext } from "styled-components"

import { Container, Header, NomeContainer, Nome, Subnome, IconContainer, Line, LineItem, LineTitle, LineText, LineSubtext } from './styles'
import Icon from '../Icons/MenuIcon'

function Impressoes(props) {
    const { colors } = useContext(ThemeContext)
    const [hoverColor, setHoverColor] = useState(colors.azul)

    const client = props.client

    return (
        <Container hoverColor={hoverColor}>
            <Header>
                <NomeContainer>
                    <Nome>{client.nomefantasia}</Nome>
                    <Subnome>{client.razaosocial}</Subnome>
                </NomeContainer>
                <IconContainer> <Icon color={colors.azul}/> </IconContainer>
            </Header>
            <Line>
                <LineItem>
                    <LineTitle>Impresso</LineTitle>
                    <LineText>{client.impresso} págs</LineText>
                </LineItem>
                <LineItem>
                    <LineTitle>Excedentes</LineTitle>
                    <LineText>{client.excedentes} págs</LineText>
                </LineItem>
            </Line>
            <Line>
                <LineItem>
                    <LineTitle>Impressoras</LineTitle>
                    <LineSubtext>{Object.entries(client.impressoras).length}</LineSubtext>
                </LineItem>
                <LineItem>
                    <LineTitle>Versão</LineTitle>
                    <LineSubtext>{client.sistema.versao}</LineSubtext>
                </LineItem>
            </Line>
        </Container>
    )
}

export default Impressoes