import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text, select, boolean, object } from '@storybook/addon-knobs';

import Select from '../Select';

const items = [
  { value: "us", text: "USA" },
  { value: "by", text: "Belarus" }
];

storiesOf('Select', module)
  .add('with text', () => (
    <Select>
      <Select.Option item={items[0]} render={() => items[0].text}/>
      <Select.Option item={items[1]} render={() => items[1].text}/>
    </Select>
  ))
  .add('with select', () => (
    <select>
      <option value={items[0].value}>{items[0].text}</option>
      <option value={items[1].value}>{items[1].text}</option>
    </select>
  ));
