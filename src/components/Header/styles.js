import styled from "styled-components"

export const Container = styled.div`
    height: 60px;
    background: ${({ theme }) => theme.colors.menus};
    display: flex;
    align-items: center;
    padding: 0 1rem 0 0;
    border-bottom: solid 1px ${({ theme }) => theme.colors.bordas};
    justify-content: space-between;
`
export const Settings = styled.div`
    display: flex;
    align-items: center;
`
//color: ${({theme}) => theme.colors.logo};
export const LogoContainer = styled.div`
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    border-right: solid 1px ${({ theme }) => theme.colors.bordas};
    padding: 0 1rem;
    cursor: pointer;
    :hover{
        background: ${({theme}) => theme.colors.highlight};
    }
`
export const Logo = styled.img`
    width: 42px;
    margin: 0 0.7rem;
`
export const Texto = styled.img`
    width: 130px;
`







/*
export const StrokeContainer = styled.div`
    position: relative;
`
export const TextContainer = styled.div`
    position: relative;
    margin-top: -37px;
`
export const Stroke = styled.div`
    font-family: MundoEletronico;
    font-size: 70px;
    -webkit-text-stroke: 5px white;
`
export const Text = styled.div`
    font-family: MundoEletronico;
    font-size: 70px;
    background: -webkit-linear-gradient(${({theme}) => theme.colors.logo}, ${({theme}) => theme.colors.logo}, #fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
*/