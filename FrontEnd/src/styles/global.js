import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  }

  a {
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: 0.2s;
  }
`;
