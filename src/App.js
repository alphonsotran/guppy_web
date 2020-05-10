import React from 'react';
import Form from './components/Form';

import { AppWrapper, Header } from './styles';

function App() {
  return (
    <AppWrapper>
      <Header>Guppy: A Url Shortener 🐟</Header>
      <Form />
    </AppWrapper>
  );
}

export default App;
