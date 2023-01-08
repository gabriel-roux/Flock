import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Be Vietnam Pro', sans-serif;
    -web-kit-font-smoothing: anti-aliased;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position-y: 55rem;
    overflow-x: hidden;
    background-color: #191919;

    &::-webkit-scrollbar {
          width: 5px;
        }
    
    &::-webkit-scrollbar-track {
      background-color: rgba(28, 28, 28, 0.332);
    }

    &::-webkit-scrollbar-thumb {
        background: linear-gradient(#9E00FF, #00B6FF);
    }
}


`

