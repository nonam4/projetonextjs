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

    const cliente = props.cliente

    useEffect(() => {
        if(cliente.sistema.versao === 'N/I') {
            setHoverColor(colors.vermelho) 
            setIconName('status_desinstalado')
            setIconTitle('Coletor não Instalado')
        } else if(cliente.atraso) {
            setHoverColor(colors.laranja)
            setIconName('status_atraso')
            setIconTitle('Atraso em Leituras')
        } else if(cliente.sistema.versao != version) {
            setHoverColor(colors.amarelo)
            setIconName('status_desatualizado')
            setIconTitle('Coletor Desatualizado')
        } else if(Object.keys(cliente.impressoras).length == 0) {
            setHoverColor(colors.verde)
            setIconName('status_nenhuma')
            setIconTitle('Nenhuma Impressora')
        } else if(cliente.abastecimento) {
            setHoverColor(colors.magenta)
            setIconName('status_abastecimento')
            setIconTitle('Abastecimento Necessário')
        } else {
            setHoverColor(colors.azul)
            setIconName('status_ok')
            setIconTitle('Tudo Ok!')
        }
    }, [props.cliente])

    return (
        <Container hoverColor={hoverColor}>
            <Header>
                <NomeContainer>
                    <Nome>{cliente.nomefantasia}</Nome>
                    <Subnome>{cliente.razaosocial}</Subnome>
                </NomeContainer>
                <IconContainer> <Icon color={hoverColor} name={iconName} title={iconTitle}/> </IconContainer>
            </Header>
            <Line>
                <LineItem>
                    <LineTitle>Impresso</LineTitle>
                    <LineText>{cliente.impresso} págs</LineText>
                </LineItem>
                <LineItem>
                    <LineTitle>Excedentes</LineTitle>
                    <LineText>{cliente.excedentes} págs</LineText>
                </LineItem>
            </Line>
            <Line>
                <LineItem>
                    <LineTitle>Impressoras</LineTitle>
                    <LineSubtext>{cliente.impressorasAtivas}</LineSubtext>
                </LineItem>
                <LineItem>
                    <LineTitle>Versão</LineTitle>
                    <LineSubtext>{cliente.sistema.versao}</LineSubtext>
                </LineItem>
            </Line>
        </Container>
    )
}

export default Impressoes