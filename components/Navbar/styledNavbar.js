import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #0A81AB;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  @media screen and (max-width: 280px) {
    padding: 1rem 0.5rem;
  }

  @media screen and (max-width: 578px) {
    padding: 1rem 1rem;
  }
`;

export const Logo = styled.h1`
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-size: clamp(1.5rem, 3vw, 3rem);
`;

export const Button = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  font-size: clamp(1.2rem, 2vw, 2rem);
  
  :hover {
    text-decoration: underline;
  }
`;