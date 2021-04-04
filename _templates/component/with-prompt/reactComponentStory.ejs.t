---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---
import React from 'react';
import { Meta, Story } from '@storybook/react';
import <%= h.changeCase.pascalCase(name) %>, { <%= h.changeCase.pascalCase(name) %>Props } from './<%= h.changeCase.pascalCase(name) %>';
import BuitProvider from '../../Providers/BuitProvider/BuitProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Atoms/<%= h.changeCase.pascalCase(name) %>',
  component: <%= h.changeCase.pascalCase(name) %>,
} as Meta;

export const Default: Story<<%= h.changeCase.pascalCase(name) %>Props> = (args) => (
  <BuitProvider theme={theme}>
    <<%= h.changeCase.pascalCase(name) %> {...args}><%= h.changeCase.pascalCase(name) %></<%= h.changeCase.pascalCase(name) %>>
  </BuitProvider>
);

Default.args = {};
