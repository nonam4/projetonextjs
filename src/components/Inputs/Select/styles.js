import styled from "styled-components"

export const Container = styled.select`
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.texts};
    cursor: pointer;
    padding: 0.5rem;
    transition: all linear 0.05s;
`
export const Option = styled.option`
    color: ${({ theme }) => theme.colors.texts};
    background: ${({ theme }) => theme.colors.menus};
`