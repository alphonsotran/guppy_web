import React from 'react';

import { Input, ReadOnlyWrapper, Button, Label } from './styles';

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
        <Label htmlFor="link">
          Guppy URL
          <Input value={value} readOnly />
        </Label>
        <Button>Copy</Button>
      </form>
    </ReadOnlyWrapper>
  );
};

export default ReadOnlyForm;
