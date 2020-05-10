import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [input, setInput] = useState('');
  const [guppyUrl, setGuppyUrl] = useState('');
  const [responseStatus, setResponseStatus] = useState(false);

  const registerLink = async (e) => {
    e.preventDefault();
    setResponseStatus(false);
    try {
      const {
        status,
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

  const readOnlyForm = () => {
    if (!responseStatus) {
      return null;
    }

    return <input id="guppy_link" value={guppyUrl} readOnly />;
  };

  return (
    <div className="">
      <form onSubmit={registerLink}>
        <label htmlFor="link">
          Link
          <input
            id="link"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="https://www.google.com"
          />
        </label>
        <button>Submit</button>
      </form>

      {readOnlyForm()}
    </div>
  );
};

export default Form;
