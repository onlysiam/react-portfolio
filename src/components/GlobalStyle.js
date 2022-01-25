//styled
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
  
  overflow-x: hidden;
}
body{
    background: #11152B;
    font-family: 'Barlow', sans-serif;
    overflow-x: hidden;
        ::-webkit-scrollbar {
          width: 5px;
          cursor: pointer;
        }
        ::-webkit-scrollbar-thumb {
          background: #60c4c48b;
          border-radius: 50px;
          cursor: pointer;
        }
}
`;

export default GlobalStyle;
