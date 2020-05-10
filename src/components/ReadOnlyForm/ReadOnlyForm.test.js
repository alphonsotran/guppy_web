import React from 'react';
import { shallow } from 'enzyme';
import ReadOnlyForm from './index';

it('expects to render ReadOnlyForm component', () => {
  const mockValue = 'https://localhost:5000/kdfjq2';
  const mockStatus = true;
  expect(
    shallow(<ReadOnlyForm value={mockValue} status={mockStatus} />),
  ).toMatchSnapshot();
});
