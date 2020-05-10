import React from 'react';

import { Input, ReadOnlyWrapper, Button, Label, ButtonWrap } from './styles';

const ReadOnlyForm = ({ value, status }) => {
  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(value);
  };

  if (!status) {
    return null;
  }

  return (
    <ReadOnlyWrapper>
      <form onSubmit={copyToClipboard}>
        <Label>
          Guppy URL
          <Input value={value} readOnly />
        </Label>
        <ButtonWrap>
          <Button>Copy</Button>
        </ButtonWrap>
      </form>
    </ReadOnlyWrapper>
  );
};

export default ReadOnlyForm;
