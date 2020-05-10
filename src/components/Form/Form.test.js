import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from './index';

it('expects to render Form component', () => {
  expect(shallow(<Form />)).toMatchSnapshot();
});
