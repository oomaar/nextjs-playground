import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1;

  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;