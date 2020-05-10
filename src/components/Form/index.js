import React, { useState } from 'react';
import axios from 'axios';

import ReadOnlyForm from '../ReadOnlyForm';

import {
  Input,
  Container,
  FormWrapper,
  Button,
  InputForm,
  Label,
  ErrorText,
  ErrorAndButtonWrap,
} from './styles';

const Form = () => {
  const [input, setInput] = useState('');
  const [guppyUrl, setGuppyUrl] = useState('');
  const [responseStatus, setResponseStatus] = useState(false);
  const [errorValue, setErrorValue] = useState('');

  const registerLink = async (e) => {
    e.preventDefault();
    setResponseStatus(false);
    setErrorValue('');

    try {
      const {
        data: { guppy_url },
      } = await axios({
        url: `http://localhost:5000/links`,
        method: 'post',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
        },
        data: { original_url: input },
      });

      setGuppyUrl(guppy_url);
      setResponseStatus(true);
    } catch (error) {
      setErrorValue('Please try again.');
    }
  };

  return (
    <Container className="">
      <FormWrapper>
        <InputForm onSubmit={registerLink}>
          <Label htmlFor="link">
            Link
            <Input
              id="link"
              type="url"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="https://www.google.com"
            />
          </Label>
          <ErrorAndButtonWrap>
            <Button>Submit</Button>
            {errorValue && <ErrorText>{errorValue}</ErrorText>}
          </ErrorAndButtonWrap>
        </InputForm>
      </FormWrapper>

      <ReadOnlyForm value={guppyUrl} status={responseStatus} />
    </Container>
  );
};

export default Form;
