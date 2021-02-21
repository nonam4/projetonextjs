import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background: ${({ theme }) => theme.colors.menus};
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    padding: 0 1rem 0 0;
    border-bottom: solid 1px ${({ theme }) => theme.colors.bordas};
    justify-content: space-between;
    box-shadow: 0px 2px 4px ${({ theme }) => theme.colors.shadow};
`
export const Settings = styled.div`
    display: flex;
    align-items: center;
`
export const Svg = styled.svg.attrs({ 
    version: '1.1', 
    xmlns: 'http://www.w3.org/2000/svg', 
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    padding: 0.3rem;
    cursor: pointer;
    transition: all ease 0.05s;
    box-sizing: content-box;
    margin: 2px;
    > path {
        transition: all ease 0.15s;
    };
    :hover {
        > path {
            fill: ${({ theme }) => theme.colors.hover};
        };
        margin-bottom: 0px;
        border-bottom: solid 2px ${({ theme }) => theme.colors.hover};
    }
`