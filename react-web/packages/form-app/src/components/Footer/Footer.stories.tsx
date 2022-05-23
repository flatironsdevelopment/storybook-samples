import { storiesOf } from '@storybook/react'
import { Footer } from './Footer.component'

const args = {
  testId: 'component-footer-id',
  isActive: true,
  goBack: () => null,
  saveAndContinue: () => null,
  index: 0
}

storiesOf('Components/Footer', module)
  .add('first page and active: ', () => <Footer {...args} index={0} />)
  .add('first page and inactive: ', () => (
    <Footer {...args} isActive={false} index={0} />
  ))
  .add('second page active: ', () => <Footer {...args} index={1} />)
  .add('second page inactive: ', () => (
    <Footer {...args} isActive={false} index={1} />
  ))
  .add('third page inactive: ', () => (
    <Footer {...args} isActive={false} index={2} />
  ))
