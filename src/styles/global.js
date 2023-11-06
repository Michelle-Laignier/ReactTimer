import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BG};
    background-size: 400% 400%;

    animation: bgAnimate 20s ease infinite;
    -webkit-animation: bgAnimate 20s ease infinite;

    font-family: 'Roboto', sans-serif;
  }

  body, button {
    font-size: 1.6rem;
  }

  button {
    transition: 0.3s;
  }

  button:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  @keyframes bgAnimate {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
`