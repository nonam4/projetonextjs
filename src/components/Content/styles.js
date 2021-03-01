import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-left: ${({ expanded, desktop }) => desktop? '0px' : expanded? '-250px' : '0px'};
    transition: all ease 0.15s;
`
export const Header = styled.div`
    width: 100%;
    height: 60px;
    background: ${({ theme }) => theme.colors.menus};
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    padding: 0 1rem 0 0;
    border-bottom: solid 1px ${({ theme }) => theme.colors.borders};
    justify-content: space-between;
`
export const User = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    :hover {
        div {
            opacity: 1;
            z-index: 1;
        }
        span {
            border-bottom: solid 2px ${({ theme }) => theme.colors.hover};
            color: ${({ theme }) => theme.colors.hover};
        }
    }
`
export const Avatar = styled.span`
    border-bottom: solid 2px transparent;
    display: flex;
    align-items: center;
    padding: 0.5rem;
`
export const Photo = styled.img`
    width: 35px;
    margin-right: 0.8rem;
    border-radius: 50%;
`
export const Settings = styled.div`
    transition: all ease 0.15s;
    opacity: 0;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.menus};
    border: solid 1px ${({ theme }) => theme.colors.floating};
    padding: 0.8rem 0px;
    width: 230px;
    border-radius: 5px;
    position: absolute;
    top: 65px;
    right: -3px;
    ::before {
        content: "";
        position: absolute;
        right: 10px;
        top: -10px;
        margin-left: 10px;
        width: 0px;
        height: 0px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid ${({ theme }) => theme.colors.hover};
        clear: both;
    }
`
export const SettingsItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    line-height: 40px;
    padding: 0 1rem;
    :hover {
        border-left: solid 5px ${({ theme }) => theme.colors.hover};
        background: ${({ theme }) => theme.colors.highlight};
        svg path{
            fill: ${({ theme }) => theme.colors.hover};
        }
    }
`
export const View = styled.div`
    width: 100%;
    height: calc(100% - 60px);
    overflow: hidden;
    overflow-y: auto;
`