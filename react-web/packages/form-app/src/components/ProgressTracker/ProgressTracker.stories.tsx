import { storiesOf } from '@storybook/react'
import { ProgressTracker } from './ProgressTracker.component'

storiesOf('Components/ProgressTracker', module)
  .add('step 1 [active]: ', () => <ProgressTracker step={0} />)
  .add('step 2 [active]: ', () => <ProgressTracker step={1} />)
  .add('step 3 [active]: ', () => <ProgressTracker step={2} />)
