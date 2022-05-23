import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Button } from './button.component'

storiesOf('Components/Button', module)
  .add('solid: ', () => <Button title="Storybook button" />)
  .add('outline: ', () => <Button title="Outline button" type="outline" />)
