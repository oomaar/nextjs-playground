import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  padding: 1rem 0.5rem;
  border-radius: 1rem;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 0;
  }

  button {
    border: 0;
    outline: 0;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;