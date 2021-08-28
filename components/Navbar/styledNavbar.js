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
  font-size: 3rem;
  cursor: pointer;

  @media screen and (max-width: 280px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 567px) {
    font-size: 1.8rem;
  }
`;

export const Button = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  
  :hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 280px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 567px) {
    font-size: 1.5rem;
  }
`;