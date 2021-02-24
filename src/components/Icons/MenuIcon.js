import styled, { ThemeContext } from "styled-components"
import React, { useContext } from 'react'
import icons from './index'

export const Svg = styled.svg.attrs({ 
    version: '1.1', 
    xmlns: 'http://www.w3.org/2000/svg', 
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    margin-right: ${({ margin }) => margin}rem;
`

function UnderlineIcon(props) {
    const { colors } = useContext(ThemeContext)
    const padrao = {
        size: 24,
        margin: '0.8',
        color: colors.textos,
        name: 'undefined'
    }

    return (
        <Svg viewBox="0 0 24 24" height={props.size? props.size : padrao.size} width={props.size? props.size : padrao.size} 
            margin={props.margin? props.margin : padrao.margin}  onClick={props.onClick}>
                <path fill={props.color? props.color : padrao.color} d={icons[props.name? props.name : padrao.name]}/>                
        </Svg>
    )
}

export default UnderlineIcon