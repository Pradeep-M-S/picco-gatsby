import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
    font-family:sans-serif;
    padding:0;
    margin:0;
    box-sizing:border-box;
    max-width:100vw;
    scroll-behavior:smooth;
    ::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 5px;
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
