import React from 'react';
import { render } from '@testing-library/react';
import Select from '../index';

describe('<Select /> spec', () => {
  it('renders the component', () => {
    const { container } = render(
      <Select>
        <Select.Option>Option 1</Select.Option>
        <Select.Option>Option 2</Select.Option>
        <Select.Option>Option 3</Select.Option>
      </Select>,
    );
    expect(container).toMatchSnapshot();
  });
});
