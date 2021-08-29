import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
`;

export const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
`;

export const DeleteButton = styled.button`
  background-color: #DF5E5E;
  color: #fff;
  border: 0;
  outline: 0;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  @media screen and (max-width: 280px) {
    width: 100%;
  }

  @media screen and (min-width: 578px) {
    width: 20%;
  }
`;