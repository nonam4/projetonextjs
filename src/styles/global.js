import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle` 
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        transition: background ease 0.15s, border ease 0.15s, margin ease 0.15s, color ease 0.05s;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    html {
        height: 100%;
    }
    body {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: ${({ theme }) => theme.colors.background};
        font-size: 14px;
        color: ${({ theme }) => theme.colors.texts};
    }
    #__next {
        height: 100%;
        width: 100%;
        min-width: 360px;
        display: flex;
        flex-direction: row-reverse;
    }
`