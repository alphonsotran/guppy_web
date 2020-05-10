import styled, { css } from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  font-size: 1rem;
  padding: 1rem;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid black;
  display: block;
  font-family: Brand, sans-serif;
  font-size: 1rem;
  margin: 0;
  width: 18rem;
  padding: 0.5rem;
  margin-top: 0.5rem;

  ::placeholder {
    color: 'gray';
  }

  ::-ms-clear {
    display: none;
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  background-color: lightgray;
  margin-top: 1rem;
  padding: 0.8rem;
`;

export const InputForm = styled.form`
  flex: 1;
`;

export const Label = styled.label`
  font-weight: 700;
`;
