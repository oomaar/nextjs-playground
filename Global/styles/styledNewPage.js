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
  width: 100%;
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 1rem;
  font-size: clamp(1.1rem, 1.3vw, 1.5rem);
`;

export const Input = styled.input`
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid #e1e5ea;
  outline: 0;
  font-size: 1.2rem;

  @media screen and (max-width: 280px) {
    padding: 0.5rem;
  }
`;

export const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid #e1e5ea;
  outline: 0;
  font-size: 1.2rem;
  height: 150px;

  @media screen and (max-width: 280px) {
    padding: 0.5rem;
  }
`;

export const Button = styled.button`
  background-color: #e1e5ea;
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