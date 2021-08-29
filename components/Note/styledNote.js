import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #e1e5ea;
  padding: 0.5rem;
  border-radius: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  border-bottom: 1px solid #e1e5ea;
  padding-bottom: 1rem;
  color: #0A81AB;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
`;

export const Button = styled.button`
  background-color: #0A81AB;
  color: #fff;
  outline: 0;
  border: 0;
  margin: 0 1rem;
  font-size: 1rem;
  padding: 0.5rem 0.7rem;
  border-radius: 0.7rem;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 0.8rem 1rem;
    font-weight: 700;
  }
`;