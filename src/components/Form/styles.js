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
  border-bottom: 1px solid black;
  border: 0;
  display: block;
  font-family: Brand, sans-serif;
  font-size: 1rem;
  margin-top: 0.5rem;
  margin: 0;
  padding: 0.5rem;
  width: 18rem;

  ::placeholder {
    color: 'gray';
  }

  ::-ms-clear {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: lightgray;
  border-radius: 1rem;
  border: 1px solid black;
  margin-top: 1rem;
  margin-top: 1rem;
  padding: 0.8rem;
`;

export const InputForm = styled.form`
  flex: 1;
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const ErrorText = styled.p`
  color: red;
  font-weight: 500;
`;

export const ErrorAndButtonWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-content: center;
`;
