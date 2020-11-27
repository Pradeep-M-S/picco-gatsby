import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {    
    font-family:"Josefin Sans",sans-serif;
    padding:0;
    margin:0;
    box-sizing:border-box;
    max-width:100vw;
    scroll-behavior:smooth;
    ::-webkit-scrollbar {
    width: 4px;
}

  body {
    font-family: "Josefin Sans",sans-serif;
  }

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px white; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #a7be38; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a7be38; 
}
}
`
