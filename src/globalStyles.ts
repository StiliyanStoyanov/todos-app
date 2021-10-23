import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-color: gray;
  }
  #root {
    width: 100%;
    height: 100vh;
    overflow: auto;
  }
`

export default GlobalStyles