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
} from './styles';

const Form = () => {
  const [input, setInput] = useState('');
  const [guppyUrl, setGuppyUrl] = useState('');
  const [responseStatus, setResponseStatus] = useState(false);

  const registerLink = async (e) => {
    e.preventDefault();
    setResponseStatus(false);
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
      console.log('Please try again.', error);
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
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="https://www.google.com"
            />
          </Label>
          <Button>Submit</Button>
        </InputForm>
      </FormWrapper>

      <ReadOnlyForm value={guppyUrl} status={responseStatus} />
    </Container>
  );
};

export default Form;
