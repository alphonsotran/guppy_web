import React from 'react';

const ReadOnlyForm = ({ value, status }) => {
  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(value);
  };

  if (!status) {
    return null;
  }

  return (
    <form onSubmit={copyToClipboard}>
      <input id="guppy_link" value={value} readOnly />
      <button>Copy</button>
    </form>
  );
};

export default ReadOnlyForm;
