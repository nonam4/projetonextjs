import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    width: 250px;
    flex-shrink: 0;
    flex-grow: 0;
    z-index: 0;
    background: ${({ theme }) => theme.colors.menus};
    display: flex;
    flex-direction: column;
    position: relative;
    border-right: solid 1px ${({ theme }) => theme.colors.bordas};
    align-items: center;
`
export const LogoContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    padding: 0.5rem;
    border-top: solid 1px ${({ theme }) => theme.colors.bordas};
    cursor: pointer;
    :hover {
        background: ${({ theme }) => theme.colors.highlight};
    }
`
export const Logo = styled.img`
    width: 80px;
    margin: 1rem auto;
`
export const MenuSection = styled.div`
    width: 100%;
`
export const MenuTitulo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: default !important;
    line-height: 40px;
    padding: 0.5rem 0;
    padding: 0 1rem;
    color: ${({ theme }) => theme.colors.switchColor};
`
export const MenuItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    line-height: 40px;
    padding: 0 1rem;
    :hover {
        border-left: solid 4px ${({ theme }) => theme.colors.hover};
        background: ${({ theme }) => theme.colors.highlight};
        svg path{
            fill: ${({ theme }) => theme.colors.hover};
        }
    }
`
export const Svg = styled.svg.attrs({ 
    version: '1.1', 
    xmlns: 'http://www.w3.org/2000/svg', 
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    margin-right: .8rem;
`