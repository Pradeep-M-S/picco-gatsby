import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {    
    font-family:"Roboto",sans-serif;
    padding:0;
    margin:0;
    box-sizing:border-box;
    max-width:100vw;
    scroll-behavior:smooth;
    ::-webkit-scrollbar {
    width: 4px;
}

  body {
    font-family: "Roboto",sans-serif;
  }
}
`
