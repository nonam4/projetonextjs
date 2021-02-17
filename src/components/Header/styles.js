import styled from "styled-components"

export const Container = styled.div`
    height: 60px;
    background: ${({ theme }) => theme.colors.menus};
    display: flex;
    align-items: center;
    padding: 0 30px;
    border-bottom: solid 1px ${({ theme }) => theme.colors.bordas};
    justify-content: space-between;
`
export const Settings = styled.div`
    display: flex;
    align-items: center;
`