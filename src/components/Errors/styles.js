import styled from "styled-components"

export const Container = styled.div`
    width: 300px;
    padding: 16px 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: ${({ theme }) => theme.colors.vermelho};
    color: ${({ theme }) => theme.colors.buttonTexts};
    border-radius: 5px 5px 0px 0px;
    position: absolute;
    bottom: ${({ bottom }) => bottom};
    left: calc(50% - 150px);
`
export const Close = styled.div`
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
    path {
        fill: ${({ theme }) => theme.colors.buttonTexts};
    }
    :hover svg {
        filter: brightness(0.85);
    }
`