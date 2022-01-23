//styled
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: #11152B;
    font-family: 'Barlow', sans-serif;
}
button{
    font-weight: bold;
    cursor: pointer;
    background: transparent;
    color: white;
    border: 3px solid #23d997;
    padding: 1rem 2rem;
    transition: all 0.5s ease;
    &:hover{
        background-color: #03E8B9;
        color: white;
    }
}
`;

export default GlobalStyle;
