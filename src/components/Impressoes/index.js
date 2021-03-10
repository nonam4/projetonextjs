import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from "styled-components"
import { version } from '../../../package.json'

import { Container, Header, NomeContainer, Nome, Subnome, IconContainer, Line, LineItem, LineTitle, LineText, LineSubtext } from './styles'
import Icon from '../Icons/MenuIcon'

function Impressoes(props) {
    const { colors } = useContext(ThemeContext)
    const [hoverColor, setHoverColor] = useState(colors.azul)
    const [iconName, setIconName] = useState('status_ok')
    const [iconTitle, setIconTitle] = useState('Tudo Ok!')

    const client = props.client

    useEffect(() => {
        if(client.sistema.versao === 'N/I') {
            setHoverColor(colors.vermelho) 
            setIconName('status_desinstalado')
            setIconTitle('Coletor não Instalado')
        } else if(client.abastecimento) {
            setHoverColor(colors.magenta)
            setIconName('status_abastecimento')
            setIconTitle('Abastecimento Necessário')
        } else if(client.atraso) {
            setHoverColor(colors.laranja)
            setIconName('status_atraso')
            setIconTitle('Atraso em Leituras')
        } else if(client.sistema.versao != version) {
            setHoverColor(colors.amarelo)
            setIconName('status_desatualizado')
            setIconTitle('Coletor Desatualizado')
        } else if(Object.keys(client.impressoras).length == 0) {
            setHoverColor(colors.verde)
            setIconName('status_nenhuma')
            setIconTitle('Nenhuma Impressora')
        } else {
            setHoverColor(colors.azul)
            setIconName('status_ok')
            setIconTitle('Tudo Ok!')
        }
    }, [props.client])

    return (
        <Container hoverColor={hoverColor}>
            <Header>
                <NomeContainer>
                    <Nome>{client.nomefantasia}</Nome>
                    <Subnome>{client.razaosocial}</Subnome>
                </NomeContainer>
                <IconContainer> <Icon color={hoverColor} name={iconName} title={iconTitle}/> </IconContainer>
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