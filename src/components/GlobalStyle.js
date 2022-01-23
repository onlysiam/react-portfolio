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
        ::-webkit-scrollbar {
          width: 5px;
          cursor: pointer;
        }
        ::-webkit-scrollbar-thumb {
          background: #3d3d3d;
          border-radius: 50px;
          cursor: pointer;
        }
}
button{
    font-weight: 400;
    cursor: pointer;
    font-size: 1.3rem;
    background: transparent;
    font-family: 'Barlow', sans-serif;
    color: #dadada;
    border-radius: 30px;
    border: 1px solid #dbdbdb;
    padding: 10px 20px;
    transition: all 0.5s ease;
    &:hover{
    border: 1px solid #000000;
        background-color: #03e8b9;
        color: black;
    }
}
`;

export default GlobalStyle;
