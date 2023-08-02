import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    list-style: none;
    text-decoration: none;
    font-family: "NanumLt";
    box-sizing: border-box;
  }
  
  body {
    margin: 0 auto;
    padding : 0;

  }
`;

export default GlobalStyle;
