import { storiesOf } from '@storybook/react'
import { GradientBackground } from './GradientBackground.component'

const args = {
  testId: 'component-gradient-background-id'
}

storiesOf('Components/GradientBackground', module).add('default: ', () => (
  <GradientBackground {...args} />
))
