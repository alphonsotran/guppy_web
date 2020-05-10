import styled, { css } from 'styled-components';

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid black;
  display: block;
  font-family: Brand, sans-serif;
  font-size: 1rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
  width: 18rem;

  ::placeholder {
    color: 'gray';
  }

  ::-ms-clear {
    display: none;
  }
`;

export const ReadOnlyWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-top: 2rem;
  align-self: center;
`;

export const Button = styled.button`
  margin-top: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  background-color: lightgray;
  margin-top: 1rem;
  padding: 0.8rem;
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-content: center;
`;
