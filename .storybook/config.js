import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';


const req = require.context('../src/lib', true, /.stories.js?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const storyWrapper = story => (
    <div style={{ margin: 35 }}>{story()}</div>
);

addDecorator(withKnobs());

addDecorator(
  withInfo({
    inline: true,
    header: false,
    source: true,
    maxPropsIntoLine: 1
  })
);

addDecorator(
  withOptions({
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sortStoriesByKind: true
  })
);

addDecorator(storyWrapper);

configure(loadStories, module);
