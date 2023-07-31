import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    list-style: none;
    text-decoration: none;
    font-family: "NanumLt"
  }
  
  body {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding : 0;
    box-sizing: border-box;
    display : flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: url(https://i.pinimg.com/564x/01/04/fa/0104fa2f4166c80aceec00e243e15d25.jpg);
    
  }
`;

export default GlobalStyle;
