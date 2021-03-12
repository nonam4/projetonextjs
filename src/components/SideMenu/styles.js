import styled from "styled-components"

export const Expansor = styled.div`
    width: 18px;
    height: 18px;
    padding: 0.5rem;
    position: absolute;
    right: ${({ expanded }) => expanded ? '12px' : '-46px'};
    top: 13px;
    cursor: pointer;
    transition: all ease 0.05s;
    box-sizing: content-box;
    border-bottom: solid 2px transparent;
    :hover {
        path {
            fill: ${({ theme }) => theme.colors.hover};
        };
        border-bottom: solid 2px ${({ theme }) => theme.colors.hover};
    }
`
export const Container = styled.div`
    height: 100%;
    width: 250px;
    margin-left: ${({ expanded, desktop }) => desktop && expanded ? '0px' : '-250px'};
    flex-shrink: 0;
    flex-grow: 0;
    z-index: 0;
    background: ${({ theme }) => theme.colors.menus};
    display: flex;
    flex-direction: column;
    position: relative;
    border-right: solid 1px ${({ theme }) => theme.colors.borders};
    align-items: center;
    padding-top: 60px;
`
export const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    border-top: solid 1px ${({ theme }) => theme.colors.borders};
    font-size: 10px;
    color: ${({ theme }) => theme.colors.floating};
`
export const Logo = styled.img`
    width: 80px;
    margin: 1rem auto;
`
export const Texts = styled.div`
    display: flex;
    margin: 0.5rem auto;
`
export const Text = styled.div`
    font-size: 12px;
    cursor: pointer;
    padding: 0.2rem 0.5rem;
    margin-bottom: 1px;
    border-bottom: solid 1px transparent;
    color: ${({ theme }) => theme.colors.texts};
    :hover{
        border-bottom: solid 1px ${({ theme }) => theme.colors.hover};
        color: ${({ theme }) => theme.colors.hover};
    }
`
export const Actions = styled.div`
    width: 100%;
    overflow-y: auto;
    height: 100%;
    padding-bottom: 40px;
    ::-webkit-scrollbar {
        width: 8px;
        background: transparent;
        padding-right: 2px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.floating};
        border-radius: 4px;
    }
`
export const MenuSection = styled.div`
    width: 100%;
`
export const MenuTitle = styled.div`
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