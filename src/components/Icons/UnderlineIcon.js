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
    position: absolute;
    right: ${({ expanded }) => expanded ? '12px' : '-46px'};
    top: 13px;
    padding: 0.3rem;
    cursor: pointer;
    transition: all ease 0.05s;
    box-sizing: content-box;
    border-bottom: solid 2px transparent;
    > path {
        transition: all ease 0.15s;
    };
    :hover {
        > path {
            fill: ${({ theme }) => theme.colors.hover};
        };
        border-bottom: solid 2px ${({ theme }) => theme.colors.hover};
    }
`

function UnderlineIcon(props) {
    const { colors } = useContext(ThemeContext)
    const padrao = {
        size: 24,
        color: colors.textos,
        name: 'undefined'
    }

    return (
        <Svg onClick={props.onClick} {...props} title={props.title}
            viewBox="0 0 24 24" height={props.size? props.size : padrao.size} width={props.size? props.size : padrao.size} >
            
            <path fill={props.color? props.color : padrao.color} d={icons[props.name? props.name : padrao.name]}/>
            {props.title && <title>{props.title}</title>}
        </Svg>
    )
}

export default UnderlineIcon