import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-left: ${({ expanded, desktop }) => desktop? '0px' : expanded? '-250px' : '0px'};
`
export const View = styled.div`
    width: 100%;
    height: fit-content;
    max-height: calc(100% - 60px);
    overflow: hidden;
    overflow-y: auto;
    padding: 0.8rem 0 0 0.8rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
`