import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @font-face { 
        font-family: MundoEletronico; 
        src: url('/stop.ttf'); } 
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        transition: background ease 0.15s, border ease 0.2s, color ease 0.15s;
    }
    body {
        width: 100vw;
        height: 100vh;
        background: ${({ theme }) => theme.colors.background};
        font-size: 14px;
        color: ${({ theme }) => theme.colors.textos};
    }
`