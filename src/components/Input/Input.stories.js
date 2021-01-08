import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './index';

storiesOf('Components/Input', module)
  .add('default', () => <Input />)
  .add('placeholder', () => <Input placeholder={'placeholder'} />)